import Card from "./Card.tsx";

const CardHolder = () => {
    return (
        <span className="grid grid-cols-2">
            <Card site={"MBIT"} slots={19} price={50} evslots={2} evprice={75}></Card>
            <Card site={"ADIT"} slots={30} price={50} evslots={4} evprice={75}></Card>
            <Card site={"ADIT"} slots={30} price={50} evslots={4} evprice={75}></Card>
        </span>
    )
}

export default CardHolder;