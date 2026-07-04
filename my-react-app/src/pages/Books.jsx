import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

export default function Books() {
  const userId = localStorage.getItem("userId");
  const [books, setBooks] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const res = await API.get("/books");
    setBooks(res.data);
  };

  const searchBooks = async () => {
    if (!keyword.trim()) return loadBooks();

    const res = await API.get(`/books/search?keyword=${keyword}`);
    setBooks(res.data);
  };

  const borrowBook = async (bookId) => {
    const confirmBorrow = window.confirm(
      "Do you want to borrow this book?\n\n⚠️ Note: If not returned by due date, ₹50 per day fine will be applied."
    );

    if (!confirmBorrow) return;

    try {
      await API.post(
        `/user/borrow/book?userId=${userId}&bookId=${bookId}`
      );

      alert("Book borrowed successfully!");
    } catch (err) {
      console.log(err);
      alert("Borrow failed");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Library Books</h2>

      <div className="d-flex mb-4">
        <input
          className="form-control"
          placeholder="Search Book..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <button className="btn btn-primary ms-2" onClick={searchBooks}>
          Search
        </button>
      </div>

      <div className="row">
        {books.map((book) => (
          <div className="col-md-4 mb-4" key={book.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5>{book.title}</h5>

                <p><b>Author:</b> {book.author}</p>
                <p><b>Stock:</b> {book.stock}</p>

                <Link to={`/books/${book.id}`} className="btn btn-success me-2">
                  View Details
                </Link>

                <button
                  className="btn btn-warning"
                  onClick={() => borrowBook(book.id)}
                >
                  Borrow
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}