import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import "../styles/global.css";

export default function ArticleDetail() {
  const { id } = useParams();

  const [article, setArticle] = useState(null);

  useEffect(() => {
    loadArticle();
  }, [id]);

  const loadArticle = async () => {
    try {
      const res = await API.get(`/features/articles/${id}`);
      setArticle(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!article)
    return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <div className="container mt-5">

      <div className="card shadow">

        <div className="card-body">

          <h2>{article.title}</h2>

          <hr />

          <p>
            <strong>Author :</strong> {article.author}
          </p>

          <p>
            <strong>Category :</strong> {article.category}
          </p>

          <p>
            <strong>Published :</strong>{" "}
            {article.publishedAt?.replace("T", " ")}
          </p>

          <hr />

          <div style={{ whiteSpace: "pre-wrap", lineHeight: "1.8" }}>
            {article.content}
          </div>

        </div>

      </div>

    </div>
  );
}