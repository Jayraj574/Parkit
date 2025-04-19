type BookProps = {
    site:string;
}

const Book = ({site}:BookProps) => {

    return (
        <form className="flex flex-col gap-5 p-10" >
        <h2 className="text-4xl font-bold ">Book Slot</h2>
        <h3 className="text-3xl font-semibold ">Site : {site}</h3>
        <label className="text-gray-700 text-3xl font-semibold">Slot Type :
                <select id="slottype" className="border rounded w-full py-1 px-2 font-normal mt-2"> Choose Slot Type
                    <option value="ev slots">EV Slot</option>
                    <option value="normal slots">Normal Slot</option>
                </select>
            </label>
        <div className="flex flex-col md:flex-row gap-5">
            <label className="text-gray-700 text-3xl font-semibold">Entry Time :
                <input className="border rounded w-full py-1 px-2 font-normal mt-2" placeholder="In HH:MM format"></input>
            </label>
            <label className="text-gray-700 text-3xl font-semibold">Exit Time : 
                <input className="border rounded w-full py-1 px-2 font-normal mt-2" placeholder="In HH:MM format"></input>
            </label>
        </div>

        <div className="text-3xl font-medium : ">Price : </div>
        
        <span>
            <button type="submit" className="text-3xl bg-orange-300 text-white rounded-2xl p-4" > Book </button>
        </span>

        
        
    </form>
    )
}

export default Book;
