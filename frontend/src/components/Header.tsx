import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className='flex justify-between items-center bg-theme1 py-10 mb-10'>
        <span className='text-white font-Ubuntu font-[800] text-8xl ml-10'>
            <p>Parkit</p>
        </span>
        <Link to={'/SignIn'} className="text-xl h-1/3 p-3 font-Ubuntu mr-6 bg-white rounded-md">
            Sign In
        </Link>
    </div>
  )
}

export default Header;