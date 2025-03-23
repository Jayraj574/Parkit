import {Link} from "react-router-dom";
import {getImageURL} from "../constants/images.ts";

const Card = (props:{site:string , slots:number ,price:number ,evslots:number , evprice:number}) =>{
        return(
        <div className="border-2 border-green-400 w-1/2 rounded-2xl m-6">
            <img src={getImageURL(`${props.site}.jpg`)} className=" w-full h-40 rounded-t-2xl" />
            <div  className='px-5 ' >
                <p className="text-2xl font-bold ">
                    {props.site}
                </p>
                <p className="text-xl font-semibold ">
                    Normal Slots : {props.slots} @ ${props.price} per hour
                </p>
                <p className="text-xl font-semibold ">
                    Ev Slots : {props.evslots} @ ${props.evprice} per hour
                </p>
                <Link to="/Select" className="text-xl bg-red-400 text-white rounded-2xl mt-7 px-3 py-2">
                    Book
                </Link>
            </div>
        </div>
    )
}

export default Card;