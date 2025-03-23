import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className='flex justify-between items-center bg-red-400 py-10 m-6 rounded-2xl'>
        <span className='text-gray-100 font-bold text-8xl ml-10'>
            <p>Parkit</p>
        </span>
        <Link to={'/SignIn'} className="text-xl h-1/3 p-3 font-semibold mr-6 bg-white rounded-2xl">
            Sign In
        </Link>
    </div>
  )
}

export default Header;