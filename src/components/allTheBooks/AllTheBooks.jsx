import fantasy from "../../assets/fantasy.json";
import BookCard from "./BookCard";

const AllTheBooks = () => {
    return (
        <div
            className="container mt-4"
            style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                justifyContent: "center",
            }}
        >
            {fantasy.map((book) => (
                <BookCard book={book} key={book.asin} />
            ))}
        </div>
    );
};

export default AllTheBooks;
