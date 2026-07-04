import { useEffect, useState } from "react";
import API from "../services/api";

export default function News() {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await API.get("/features/all-news");
      setNewsList(res.data);

    } catch (err) {
      console.error(err);
      setError("Failed to load news. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">

      <h2 className="mb-4">Latest Library News</h2>

      {/* LOADING STATE */}
      {loading && (
        <p className="text-muted">Loading news...</p>
      )}

      {/* ERROR STATE */}
      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      {/* EMPTY STATE */}
      {!loading && !error && newsList.length === 0 && (
        <h4 className="text-center mt-5 text-muted">
          No News Available
        </h4>
      )}

      {/* NEWS LIST */}
      <div className="row">
        {newsList.map((news) => (
          <div className="col-md-6 mb-4" key={news.id}>
            <div className="card shadow-sm h-100">

              <div className="card-body">

                <h4 className="text-primary">
                  {news.heading}
                </h4>

                <p className="mb-1">
                  <strong>Source:</strong> {news.source}
                </p>

                <p className="mb-3">
                  <strong>Date:</strong> {news.date}
                </p>

                <hr />

                <p>
                  {news.body
                    ? news.body.substring(0, 250)
                    : "No content available"}
                  ...
                </p>

              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}