import { useState } from "react";
import Card from "react-bootstrap/Card";

const SingleBook = (props) => {
    const [isSelected, setIsSelected] = useState(false);

    const toggleSelection = () => {
        setIsSelected(isSelected ? false : true);
    };

    return (
        <Card
            onClick={toggleSelection}
            style={{
                width: "18rem",
                height: "28rem",
                border: isSelected ? "1px solid red" : "",
            }}
        >
            <Card.Img src={props.img} style={{ height: "24rem" }} />
            <Card.Title>{props.title}</Card.Title>
        </Card>
    );
};

export default SingleBook;
