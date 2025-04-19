
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <form className="flex flex-col gap-5 p-10" >
        <h2 className="text-4xl font-bold ">Sign in</h2>
        <label className="text-gray-700 text-3xl font-semibold">Email
                <input className="border rounded w-full py-1 px-2 font-normal"></input>
        </label>
        <label className="text-gray-700 text-3xl font-semibold">Password
            <input type="password" className="border rounded w-full py-1 px-2 font-normal" ></input>
        </label>
        
        <span>
            <button type="submit" className="text-3xl bg-orange-300 text-white rounded-2xl p-4 " > Sign - in </button>
        </span>   

        <div className="flex justify-items-center text-3xl font-medium"><p>New Here ? </p><Link to="/register" className=' text-orange-300 pl-2'><p> Register here</p></Link></div>     
    </form>
  )
}

export default Signin