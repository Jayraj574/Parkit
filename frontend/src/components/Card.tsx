import {Link} from "react-router-dom";
import ADIT from "../assets/ADIT.jpg"

type CardProps ={
    site:string ;
    slots:number ;
    price:number ;
    evslots:number ;
    evprice:number
}

const Card = ({site, slots ,price,evslots, evprice}:CardProps) =>{
        return(
        <div className="bg-white rounded-2xl w-2xl mx-auto my-6 pb-6 hover:drop-shadow-2xl hover:shadow-theme2">
            <img src={ADIT} className=" w-full h-50 rounded-t-xl" />
            <p className=" text-2xl font-bold mt-4 ml-4">
                    {site}
                </p>
            <div  className='flex p-4 justify-center'>
                <span className="text-xl font-semibold mx-auto">
                    <p>Normal Slots </p>
                    <p>Availabel : {slots} </p>
                    <p>Rate : ${price} / hr </p>
                </span>
                <span className="text-xl font-semibold mx-auto  ">
                    <p>EV Slots</p>
                    <p>Availabel : {evslots} </p>
                    <p>Rate : ${evprice} / hr </p>
                </span>
            </div>
            <Link to='/Select' className="text-xl  bg-theme3 text-gray-950 rounded-md py-2 px-3 ml-3" >
                    Book
                </Link>
        </div>
    )
}

export default Card;