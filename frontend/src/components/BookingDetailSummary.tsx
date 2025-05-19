import { ParkingType } from "../../../backend/src/shared/types";

type Props = {
  checkInTime: Date;
  checkOutTime: Date;
  slotType : string;
  numberOfHours: number;
  parking: ParkingType;
};

const BookingDetailsSummary = ({
  checkInTime,
  checkOutTime,
  slotType,
  numberOfHours,
  parking,
}: Props) => {
  return (
    <div className="grid gap-4 rounded-lg border border-slate-300 p-5 h-fit">
      <h2 className="text-xl font-bold">Your Booking Details</h2>
      <div className="border-b py-2">
        Location:
        <div className="font-bold">{`${parking.name}, ${parking.city}, ${parking.country}`}</div>
      </div>
      <div className="flex justify-between">
        <div>
          Check-in
          <div className="font-bold"> {checkInTime.toDateString()}</div>
        </div>
        <div>
          Check-out
          <div className="font-bold"> {checkOutTime.toDateString()}</div>
        </div>
      </div>
      <div className="border-t border-b py-2">
        Total length of stay:
        <div className="font-bold">{numberOfHours} nights</div>
      </div>

      <div>
        SlotType{" "}
        <div className="font-bold">
          {slotType}
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsSummary;