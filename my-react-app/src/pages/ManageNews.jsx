import { useEffect, useState } from "react";
import API from "../services/api";

const ManageNews = () => {

  const [news, setNews] = useState([]);

  const [form, setForm] = useState({
    heading: "",
    body: "",
    source: "",
  });

  const [editingId, setEditingId] = useState("");

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    const res = await API.get("/admin/news");
    setNews(res.data);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const saveNews = async () => {

    if (editingId) {
      await API.put(`/admin/news/${editingId}`, form);
    } else {
      await API.post("/admin/news", form);
    }

    setForm({
      heading: "",
      body: "",
      source: "",
    });

    setEditingId("");

    loadNews();
  };

  const editNews = (item) => {

    setEditingId(item.id);

    setForm({
      heading: item.heading,
      body: item.body,
      source: item.source,
    });
  };

  const deleteNews = async (id) => {

    if (!window.confirm("Delete News?")) return;

    await API.delete(`/admin/news/${id}`);

    loadNews();
  };

  return (
    <div className="container mt-4">

      <h2>Manage News</h2>

      <div className="card p-3 mb-4">

        <input
          className="form-control mb-2"
          placeholder="Heading"
          name="heading"
          value={form.heading}
          onChange={handleChange}
        />

        <textarea
          className="form-control mb-2"
          rows="4"
          placeholder="News Body"
          name="body"
          value={form.body}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          placeholder="Source"
          name="source"
          value={form.source}
          onChange={handleChange}
        />

        <button
          className="btn btn-primary"
          onClick={saveNews}
        >
          {editingId ? "Update News" : "Add News"}
        </button>

      </div>

      <table className="table table-bordered">

        <thead className="table-dark">
          <tr>
            <th>Heading</th>
            <th>Source</th>
            <th width="180">Action</th>
          </tr>
        </thead>

        <tbody>

          {news.map((n) => (
            <tr key={n.id}>

              <td>{n.heading}</td>

              <td>{n.source}</td>

              <td>

                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => editNews(n)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteNews(n.id)}
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

export default ManageNews;