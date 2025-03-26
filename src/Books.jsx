import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://seussology.info/api/books")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log the data to check image URLs;
        setBooks(data)
      })
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  return (
    <div className="books">
      <h1>Seuss Treasury</h1>
      <div className="book" style={{ display: "flex", flexWrap: "wrap" }}>
        {books.map((book) => (
          <Link key={book.id} to={`/book/${book.id}`}>
            <img
              src={book.image}
              alt={book.title}
              style={{ width: "150px", margin: "10px", cursor: "pointer", borderRadius: "4px" }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
