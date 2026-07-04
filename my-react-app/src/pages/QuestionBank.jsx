import { useEffect, useState } from "react";
import API from "../services/api";

export default function QuestionBank() {
  const [questions, setQuestions] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // reply text storage
  const [reply, setReply] = useState({});

  // toggle reply box per question
  const [openReplyBox, setOpenReplyBox] = useState(null);

  const role = localStorage.getItem("role");
  const user = localStorage.getItem("name");

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    try {
      const res = await API.get("/features/questions");
      setQuestions(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed to load questions");
    }
  };

  const askQuestion = async () => {
    if (!title.trim() || !content.trim()) return;

    try {
      await API.post("/features/questions", {
        title,
        content,
        askedBy: user,
      });

      setTitle("");
      setContent("");
      loadQuestions();
    } catch (err) {
      console.log(err);
      alert("Failed to post question");
    }
  };

  const addReply = async (id) => {
    if (!reply[id]?.trim()) return;

    try {
      await API.post(`/features/questions/${id}/reply`, {
        answeredBy: user,
        content: reply[id],
      });

      setReply({ ...reply, [id]: "" });
      setOpenReplyBox(null);
      loadQuestions();
    } catch (err) {
      console.log(err);
      alert("Reply failed");
    }
  };

  return (
    <div className="container mt-4">

      <h2>Question Bank</h2>

      {/* ASK QUESTION */}
      <div className="card mb-4">
        <div className="card-body">

          <input
            className="form-control mb-3"
            placeholder="Question Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="form-control mb-3"
            rows="4"
            placeholder="Ask your question..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button className="btn btn-primary" onClick={askQuestion}>
            Post Question
          </button>

        </div>
      </div>

      {/* QUESTIONS LIST */}
      {questions.map((q) => (
        <div className="card mb-4" key={q.id}>
          <div className="card-body">

            <h4>{q.title}</h4>
            <p>{q.content}</p>

            <small className="text-muted">
              Asked By: {q.askedBy}
            </small>

            <hr />

            <h5>Replies</h5>

            {!q.answers || q.answers.length === 0 ? (
              <p className="text-muted">No replies yet.</p>
            ) : (
              q.answers.map((ans, index) => (
                <div key={index} className="border rounded p-2 mb-2">
                  <b>{ans.answeredBy}</b>
                  <p className="mb-0">{ans.content}</p>
                </div>
              ))
            )}

            {/* ADMIN REPLY SECTION */}
            {role === "ADMIN" && (
              <div className="mt-3">

                {/* Toggle Reply Button */}
                <button
                  className="btn btn-success"
                  onClick={() =>
                    setOpenReplyBox(
                      openReplyBox === q.id ? null : q.id
                    )
                  }
                >
                  {openReplyBox === q.id ? "Close Reply" : "Reply"}
                </button>

                {/* Reply Input Box */}
                {openReplyBox === q.id && (
                  <div className="mt-3">

                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Write your reply..."
                      value={reply[q.id] || ""}
                      onChange={(e) =>
                        setReply({
                          ...reply,
                          [q.id]: e.target.value,
                        })
                      }
                    />

                    <button
                      className="btn btn-primary mt-2"
                      onClick={() => addReply(q.id)}
                    >
                      Send Reply
                    </button>

                  </div>
                )}

              </div>
            )}

          </div>
        </div>
      ))}

    </div>
  );
}