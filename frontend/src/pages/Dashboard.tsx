import { useState, useEffect } from 'react'

function AdminDashboard() {
  const [siteStatus, setSiteStatus] = useState(true)
  const toggleSite = () => setSiteStatus(!siteStatus)

  const currentBookings = [
    { carNo: "GJ01AB1234", time: "10:00 AM - 12:00 PM", otp: "4582" },
    { carNo: "MH12XY9876", time: "11:30 AM - 1:00 PM", otp: "9231" }
  ]

  const parkedCars = [
    { carNo: "GJ05MK1122", expiresAt: new Date(Date.now() + 15 * 60000) }, // 15 mins
    { carNo: "RJ14ZX8821", expiresAt: new Date(Date.now() + 5 * 60000) }   // 5 mins
  ]

  const pastCars = ["DL3CAA1234", "GJ01CD5678"]

  return (
    <div className="p-10 space-y-10">
      <h1 className="text-5xl font-bold mb-4">Admin Dashboard</h1>

      {/* Toggle */}
      <div className="flex items-center justify-between bg-gray-100 p-6 rounded-2xl">
        <h2 className="text-3xl font-semibold">Site Status</h2>
        <label className="inline-flex items-center cursor-pointer">
          <span className="mr-3 text-2xl font-medium">{siteStatus ? 'Online' : 'Offline'}</span>
          <div className="relative">
            <input type="checkbox" checked={siteStatus} onChange={toggleSite} className="sr-only" />
            <div className={`w-14 h-8 rounded-full transition-all ${siteStatus ? 'bg-green-400' : 'bg-gray-400'}`} />
            <div className={`dot absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition transform ${siteStatus ? 'translate-x-6' : ''}`} />
          </div>
        </label>
      </div>

      {/* Sections */}
      <BookingSection title="Current Bookings" bookings={currentBookings} />
      <ParkedCarsSection title="Currently Parked Cars" cars={parkedCars} />
      <SimpleSection title="Previously Parked Cars" data={pastCars} />
    </div>
  )
}

// Booking section with OTP input
function BookingSection({ title, bookings }: { title: string; bookings: { carNo: string; time: string; otp: string }[] }) {
  const [otpInputs, setOtpInputs] = useState<string[]>(Array(bookings.length).fill(""))

  const handleOtpChange = (index: number, value: string) => {
    const newOtps = [...otpInputs]
    newOtps[index] = value
    setOtpInputs(newOtps)
  }

  return (
    <div className="bg-gray-100 p-6 rounded-2xl">
      <h3 className="text-3xl font-semibold mb-4">{title}</h3>
      <table className="w-full text-left text-xl">
        <thead>
          <tr className="text-gray-600">
            <th className="pb-2">Car No.</th>
            <th className="pb-2">Booking Time</th>
            <th className="pb-2">Generated OTP</th>
            <th className="pb-2">Enter OTP</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b, i) => (
            <tr key={i} className="border-t border-gray-300">
              <td className="py-2">{b.carNo}</td>
              <td className="py-2">{b.time}</td>
              <td className="py-2 font-bold text-orange-500">{b.otp}</td>
              <td className="py-2">
                <input
                  type="text"
                  maxLength={6}
                  value={otpInputs[i]}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  className="border px-2 py-1 rounded text-lg w-28"
                  placeholder="Enter OTP"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Countdown timer component
function CountdownTimer({ expiresAt }: { expiresAt: Date }) {
  const [timeLeft, setTimeLeft] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = expiresAt.getTime() - new Date().getTime()
      if (diff <= 0) {
        setTimeLeft("Expired")
        clearInterval(interval)
      } else {
        const mins = Math.floor(diff / 60000)
        const secs = Math.floor((diff % 60000) / 1000)
        setTimeLeft(`${mins}m ${secs}s`)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [expiresAt])

  return <span className="text-lg text-red-600 font-medium">{timeLeft}</span>
}

// Section for currently parked cars with expiry countdown
function ParkedCarsSection({ title, cars }: { title: string; cars: { carNo: string; expiresAt: Date }[] }) {
  return (
    <div className="bg-gray-100 p-6 rounded-2xl">
      <h3 className="text-3xl font-semibold mb-4">{title}</h3>
      <table className="w-full text-left text-xl">
        <thead>
          <tr className="text-gray-600">
            <th className="pb-2">Car No.</th>
            <th className="pb-2">Expires In</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, i) => (
            <tr key={i} className="border-t border-gray-300">
              <td className="py-2">{car.carNo}</td>
              <td className="py-2"><CountdownTimer expiresAt={car.expiresAt} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Simple section for lists
function SimpleSection({ title, data }: { title: string; data: string[] }) {
  return (
    <div className="bg-gray-100 p-6 rounded-2xl">
      <h3 className="text-3xl font-semibold mb-4">{title}</h3>
      <ul className="list-disc list-inside text-xl space-y-1">
        {data.length > 0 ? data.map((item, index) => <li key={index}>{item}</li>) : <li className="text-gray-500">No data available</li>}
      </ul>
    </div>
  )
}

export default AdminDashboard
