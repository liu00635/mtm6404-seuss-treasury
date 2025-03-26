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
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {books.map((book) => (
          <Link key={book.id} to={`/book/${book.id}`} className="book">
            <div className="book-card">  {/* Add this wrapper div with book-card class */}
              <img
                src={book.image}
                alt={book.title}
                style={{
                  width: "150px",
                  margin: "10px",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
