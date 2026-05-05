import { useState } from "react";
import fantasy from "../../assets/fantasy.json";
import SingleBook from "./SingleBook";

const AllTheBooks = () => {
    const [title, setTitle] = useState("");

    const handleChange = (event) => {
        const value = event.target.value;
        setTitle(value);
    };

    return (
        <>
            <input
                type="text"
                placeholder="cerca per titolo..."
                value={title}
                onChange={handleChange}
                style={{ minWidth: "18rem", borderRadius: ".33rem" }}
            />
            <div
                className="container mt-4"
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1rem",
                    justifyContent: "center",
                }}
            >
                {fantasy
                    .filter((book) => {
                        return book.title
                            .toLowerCase()
                            .includes(title.toLowerCase());
                    })
                    .map((book) => {
                        return (
                            <SingleBook
                                key={book.asin}
                                img={book.img}
                                title={book.title}
                            />
                        );
                    })}
            </div>
        </>
    );
};

export default AllTheBooks;
