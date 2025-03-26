import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function BookDetails() {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetch(`https://seussology.info/api/books/${id}`)
            .then((res) => res.json())
            .then((data) => setBook(data))
            .catch((err) => console.error("Error fetching book:", err));
    }, [id]);

    if (!book) return <h2>Loading...</h2>;

    return (
        <div>
            <h1>{book.title}</h1>
            <img src={book.image} alt={book.title} style={{ width: "200px", borderRadius: "4px" }} />
            <p>{book.description}</p>
        </div>
    );
}