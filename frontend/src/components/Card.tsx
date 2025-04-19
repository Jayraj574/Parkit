import {Link} from "react-router-dom";
import ADIT from "../assets/ADIT.jpg"

const Card = (props:{site:string , slots:number ,price:number ,evslots:number , evprice:number}) =>{
        return(
        <div className=" border-4 border-orange-300 rounded-2xl w-2xl mx-auto my-6 pb-6">
            <img src={ADIT} className=" w-full h-50 rounded-t-xl" />
            <p className=" text-2xl font-bold mt-4 ml-4">
                    {props.site}
                </p>
            <div  className='flex p-4 justify-center'>
                <span className="text-xl font-semibold mx-auto">
                    <p>Normal Slots </p>
                    <p>Availabel : {props.slots} </p>
                    <p>Rate : ${props.price} / hr </p>
                </span>
                <span className="text-xl font-semibold mx-auto  ">
                    <p>EV Slots</p>
                    <p>Availabel : {props.evslots} </p>
                    <p>Rate : ${props.evprice} / hr </p>
                </span>
            </div>
            <Link to="/Select" className="text-xl bg-orange-300 text-white rounded-2xl py-2 px-3 ml-3" >
                    Book
                </Link>
        </div>
    )
}

export default Card;