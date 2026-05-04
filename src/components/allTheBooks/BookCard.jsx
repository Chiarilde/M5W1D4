import Card from "react-bootstrap/Card";

const BookCard = ({ book }) => {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img src={book.img} style={{ height: "100%" }} />
        </Card>
    );
};

export default BookCard;
