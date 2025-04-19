import { Link } from "react-router-dom"

const Search = () =>{
    return (
        <div className="flex justify-center mb-10">
        <input type="text" placeholder="Find your Nearby Parking" className="text-3xl border-2 border-gray-600 rounded-2xl p-3 w-1/2"  />
            <Link to="/Search" className="text-3xl bg-orange-300 text-white rounded-2xl p-4 ml-4">
                Search
            </Link>
        </div>
    )
}

export default Search
