import { Link } from "react-router-dom"

const Search = () =>{
    return (
        <div className=" flex justify-center mb-10">
        <input type="text" placeholder="Find Your Nearby Parking" className="bg-white text-2xl  border-theme2 rounded-4xl p-3 pl-6 w-1/2"  />
            <Link to="/Search" className="bg-white text-3xl text-theme2 rounded-2xl p-4 ml-4 hover:bg-theme2 hover:text-white">
                Search
            </Link>
        </div>
    )
}

export default Search
