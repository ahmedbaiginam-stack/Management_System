import { useEffect, useState } from "react";
import API from "../services/api";

export default function ManageQuestions() {

  const [questions, setQuestions] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    content: "",
    askedBy: "",
  });

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    try {
      const res = await API.get("/admin/questions");
      setQuestions(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const editQuestion = (q) => {
    setEditingId(q.id);

    setForm({
      title: q.title,
      content: q.content,
      askedBy: q.askedBy,
    });
  };

  const updateQuestion = async () => {
    try {

      const oldQuestion = questions.find((q) => q.id === editingId);

      await API.put(`/admin/questions/${editingId}`, {
        ...oldQuestion,
        title: form.title,
        content: form.content,
        askedBy: form.askedBy,
      });

      alert("Question Updated");

      setEditingId(null);

      setForm({
        title: "",
        content: "",
        askedBy: "",
      });

      loadQuestions();

    } catch (err) {
      console.log(err);
      alert("Update Failed");
    }
  };

  const deleteQuestion = async (id) => {

    if (!window.confirm("Delete this question?")) return;

    try {

      await API.delete(`/admin/questions/${id}`);

      alert("Question Deleted");

      loadQuestions();

    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };

  return (
    <div className="container mt-4">

      <h2 className="mb-4">Manage Questions</h2>

      {editingId && (
        <div className="card p-4 mb-4 shadow">

          <h4>Edit Question</h4>

          <input
            className="form-control mb-3"
            placeholder="Asked By"
            value={form.askedBy}
            onChange={(e) =>
              setForm({
                ...form,
                askedBy: e.target.value,
              })
            }
          />

          <input
            className="form-control mb-3"
            placeholder="Question Title"
            value={form.title}
            onChange={(e) =>
              setForm({
                ...form,
                title: e.target.value,
              })
            }
          />

          <textarea
            className="form-control mb-3"
            rows="5"
            placeholder="Question Content"
            value={form.content}
            onChange={(e) =>
              setForm({
                ...form,
                content: e.target.value,
              })
            }
          />

          <button
            className="btn btn-success me-2"
            onClick={updateQuestion}
          >
            Update
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => {
              setEditingId(null);
              setForm({
                title: "",
                content: "",
                askedBy: "",
              });
            }}
          >
            Cancel
          </button>

        </div>
      )}

      <table className="table table-bordered table-hover">

        <thead className="table-dark">

          <tr>
            <th>Asked By</th>
            <th>Title</th>
            <th>Question</th>
            <th>Replies</th>
            <th width="180">Action</th>
          </tr>

        </thead>

        <tbody>

          {questions.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No Questions Found
              </td>
            </tr>
          ) : (
            questions.map((q) => (
              <tr key={q.id}>

                <td>{q.askedBy}</td>

                <td>{q.title}</td>

                <td>{q.content}</td>

                <td>{q.answers?.length || 0}</td>

                <td>

                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => editQuestion(q)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteQuestion(q.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
}