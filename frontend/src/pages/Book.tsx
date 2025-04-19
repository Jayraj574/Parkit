import { useForm } from "react-hook-form";

type BookFormData={
    firstName:string;
    lastName:string;
    phone:number;
    hours:number;
}

const Book = () => {

    const{book}=useForm<BookFormData>();

    return (
        <form>
            <p>Book Your Slot</p>
        </form>
    )
}

export default Book;
