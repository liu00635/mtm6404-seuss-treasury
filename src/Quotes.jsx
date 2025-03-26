import { useState, useEffect } from "react";

export default function Quotes() {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        fetch("https://seussology.info/api/quotes/random/10")
            .then((res) => res.json())
            .then((data) => setQuotes(data))
            .catch((err) => console.error("Error fetching quotes:", err));
    }, []);

    return (
        <div>
            <h1>Dr. Seuss Quotes</h1>
            {/* <ul>
                {quotes.map((quote) => (
                    <li key={quote.id}>"{quote.text}"</li>
                ))}
            </ul> */}
            <div className="quote-container">
                {quotes.map((quote, index) => (
                    <div key={index} className="quote-card">
                        <p className="quote-text">"{quote.text}"</p>
                        <p className="quote-author">- Dr. Seuss</p>
                    </div>
                ))}
            </div>
        </div>
    );
}