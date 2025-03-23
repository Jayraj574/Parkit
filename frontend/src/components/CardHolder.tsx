import Card from "./Card.tsx";

const CardHolder = () => {
    return (
        <span className="flex">
            <Card site={"MBIT"} slots={19} price={50}></Card>
            <Card site={"ADIT"} slots={30} price={50}></Card>
        </span>
    )
}

export default CardHolder;