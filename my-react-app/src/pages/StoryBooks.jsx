import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import "../styles/global.css";

export default function StoryBooks() {
  const userId = localStorage.getItem("userId");
  const [stories, setStories] = useState([]);

  useEffect(() => {
    loadStories();
  }, []);

  const loadStories = async () => {
    const res = await API.get("/features/storybooks");
    setStories(res.data);
  };

  const borrowStoryBook = async (storyBookId) => {
    const confirmBorrow = window.confirm(
      "Do you want to borrow this story book?\n\n⚠️ Fine: ₹50 per day after due date."
    );

    if (!confirmBorrow) return;

    try {
      await API.post(
        `/user/borrow/storybook?userId=${userId}&storyBookId=${storyBookId}`
      );

      alert("Story book borrowed successfully!");
    } catch (err) {
      console.log(err);
      alert("Borrow failed");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Story Books</h2>

      <div className="row">
        {stories.map((story) => (
          <div className="col-md-4 mb-4" key={story.id}>
            <div className="card h-100 shadow">

              {story.coverUrl && (
                <img
                  src={story.coverUrl}
                  className="card-img-top"
                  alt={story.title}
                  style={{ height: 250, objectFit: "cover" }}
                />
              )}

              <div className="card-body">
                <h4>{story.title}</h4>

                <p><strong>Author:</strong> {story.author}</p>

                <Link
                  to={`/storybooks/${story.id}`}
                  className="btn btn-primary me-2"
                >
                  Read Story
                </Link>

                <button
                  className="btn btn-success"
                  onClick={() => borrowStoryBook(story.id)}
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