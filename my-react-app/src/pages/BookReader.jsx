import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

export default function BookReader() {

  const { id } = useParams();

  const [book, setBook] = useState(null);

  useEffect(() => {
    API.get(`/books/${id}`)
      .then((res) => setBook(res.data));
  }, [id]);

  if (!book)
    return <h3 className="text-center mt-5">Loading...</h3>;

  return (
    <div className="container mt-5">

      <div className="card shadow">

        <div className="card-body">

          <h2>{book.title}</h2>

          <hr />

          <h5>Author</h5>

          <p>{book.author}</p>

          <h5>Available Stock</h5>

          <p>{book.stock}</p>

          <h5>Next Available Date</h5>

          <p>{book.nextAvailableDate || "Available Now"}</p>

          <div className="alert alert-warning mt-4">
            This project currently stores only book information.
            Add a <b>PDF URL</b> or <b>Book Content</b> field in the Book model to enable online reading.
          </div>

        </div>

      </div>

    </div>
  );
}