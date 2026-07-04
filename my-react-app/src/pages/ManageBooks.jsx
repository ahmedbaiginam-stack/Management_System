import { useEffect, useState } from "react";
import API from "../services/api";

const ManageBooks = () => {
  const [books, setBooks] = useState([]);

  const [book, setBook] = useState({
    title: "",
    author: "",
    stock: 1,
  });

  const [editingId, setEditingId] = useState("");

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const res = await API.get("/admin/books");
      setBooks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const saveBook = async () => {
    try {
      if (editingId) {
        await API.put(`/admin/books/${editingId}`, book);
      } else {
        await API.post("/admin/books", book);
      }

      setBook({
        title: "",
        author: "",
        stock: 1,
      });

      setEditingId("");

      loadBooks();
    } catch (err) {
      console.log(err);
    }
  };

  const editBook = (b) => {
    setEditingId(b.id);

    setBook({
      title: b.title,
      author: b.author,
      stock: b.stock,
    });
  };

  const deleteBook = async (id) => {
    if (!window.confirm("Delete this book?")) return;

    await API.delete(`/admin/books/${id}`);

    loadBooks();
  };

  return (
    <div className="container mt-4">

      <h2>Manage Books</h2>

      <div className="card p-3 mb-4">

        <input
          className="form-control mb-2"
          placeholder="Book Title"
          name="title"
          value={book.title}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          placeholder="Author"
          name="author"
          value={book.author}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          placeholder="Stock"
          type="number"
          name="stock"
          value={book.stock}
          onChange={handleChange}
        />

        <button
          className="btn btn-primary"
          onClick={saveBook}
        >
          {editingId ? "Update Book" : "Add Book"}
        </button>

      </div>

      <table className="table table-bordered">

        <thead>

          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Stock</th>
            <th width="180">Action</th>
          </tr>

        </thead>

        <tbody>

          {books.map((b) => (

            <tr key={b.id}>

              <td>{b.title}</td>

              <td>{b.author}</td>

              <td>{b.stock}</td>

              <td>

                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => editBook(b)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteBook(b.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default ManageBooks;