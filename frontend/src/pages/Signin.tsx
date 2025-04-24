
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <form className="flex justify-items-center flex-col p-10" >
        <h2 className="text-4xl font-bold ">Sign in</h2>
        <label className="text-gray-700 text-3xl font-semibold">Email</label>
                <input className="text-2xl border-2 border-theme2 rounded-2xl p-3 pl-6 w-1/2"></input>
        <label className="text-gray-700 text-3xl font-semibold">Password</label>
            <input type="password" className="text-2xl border-2 border-theme2 rounded-2xl p-3 pl-6 w-1/2" ></input>
        <span>
            <button type="submit" className="text-3xl border-2 text-gray-950  border-theme2 rounded-2xl p-4 hover:bg-theme3 cursor-pointer" > Sign - in </button>
        </span>   

        <div className="flex justify-items-center text-3xl font-medium"><p>New Here ? </p><Link to="/register" className=' text-orange-300 pl-2'><p> Register here</p></Link></div>     
    </form>
  )
}

export default Signin