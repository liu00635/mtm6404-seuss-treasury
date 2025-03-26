import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Books from "./Books";
import BookDetails from "./BookDetails";
import Quotes from "./Quotes";

export default function App() {
  return (
    <div className="gallery">
      <nav className="nav">
        <Link to="/" className="nav-link">Books</Link> | <Link to="/quotes" className="nav-link">Quotes</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </div>
  );
}