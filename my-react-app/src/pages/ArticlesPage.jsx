import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import "../styles/global.css";

export default function ArticlesPage() {
  const userId = localStorage.getItem("userId");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      setLoading(true);
      const res = await API.get("/features/articles");
      setArticles(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed to load articles");
    } finally {
      setLoading(false);
    }
  };

  const borrowArticle = async (articleId) => {
    const confirmBorrow = window.confirm(
      "Do you want to borrow this article?\n\n⚠️ Fine: ₹50 per day after due date."
    );

    if (!confirmBorrow) return;

    try {
      await API.post(
        `/user/borrow/article?userId=${userId}&articleId=${articleId}`
      );

      alert("Article borrowed successfully!");
    } catch (err) {
      console.log(err);
      alert("Borrow failed");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Articles</h2>

      {/* Loading state */}
      {loading ? (
        <p>Loading articles...</p>
      ) : (
        <div className="row">
          {articles.map((article) => (
            <div className="col-md-6 mb-4" key={article.id}>
              <div className="card h-100 shadow-sm">

                <div className="card-body">

                  <h4>{article.title}</h4>

                  <p>
                    <b>Author:</b> {article.author}
                  </p>

                  <p>
                    <b>Category:</b> {article.category}
                  </p>

                  <p>
                    {article.content
                      ? article.content.substring(0, 150)
                      : "No content"}...
                  </p>

                  <div className="d-flex gap-2 mt-3">

                    <Link
                      to={`/articles/${article.id}`}
                      className="btn btn-primary"
                    >
                      Read Article
                    </Link>

                    <button
                      className="btn btn-success"
                      onClick={() => borrowArticle(article.id)}
                    >
                      Borrow
                    </button>

                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}