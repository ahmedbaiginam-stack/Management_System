import { useEffect, useState } from "react";
import API from "../services/api";

const ManageArticles = () => {

  const [articles, setArticles] = useState([]);

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    content: "",
  });

  const [editingId, setEditingId] = useState("");

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    const res = await API.get("/admin/articles");
    setArticles(res.data);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const saveArticle = async () => {

    if (editingId) {
      await API.put(`/admin/articles/${editingId}`, form);
    } else {
      await API.post("/admin/articles", form);
    }

    setEditingId("");

    setForm({
      title: "",
      author: "",
      category: "",
      content: "",
    });

    loadArticles();
  };

  const editArticle = (article) => {

    setEditingId(article.id);

    setForm({
      title: article.title,
      author: article.author,
      category: article.category,
      content: article.content,
    });
  };

  const deleteArticle = async (id) => {

    if (!window.confirm("Delete Article?")) return;

    await API.delete(`/admin/articles/${id}`);

    loadArticles();
  };

  return (
    <div className="container mt-4">

      <h2>Manage Articles</h2>

      <div className="card p-3 mb-4">

        <input
          className="form-control mb-2"
          placeholder="Title"
          name="title"
          value={form.title}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          placeholder="Author"
          name="author"
          value={form.author}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          placeholder="Category"
          name="category"
          value={form.category}
          onChange={handleChange}
        />

        <textarea
          rows="5"
          className="form-control mb-3"
          placeholder="Content"
          name="content"
          value={form.content}
          onChange={handleChange}
        />

        <button
          className="btn btn-success"
          onClick={saveArticle}
        >
          {editingId ? "Update Article" : "Publish Article"}
        </button>

      </div>

      <table className="table table-bordered">

        <thead className="table-dark">
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th width="180">Action</th>
          </tr>
        </thead>

        <tbody>

          {articles.map((a) => (
            <tr key={a.id}>

              <td>{a.title}</td>

              <td>{a.author}</td>

              <td>{a.category}</td>

              <td>

                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => editArticle(a)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteArticle(a.id)}
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

export default ManageArticles;