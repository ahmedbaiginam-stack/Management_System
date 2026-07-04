import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDashboardData } from "../services/libraryService";
import "../styles/home.css";

const HomePage = () => {
  const [news, setNews] = useState(null);
  const [articles, setArticles] = useState([]);
  const [stories, setStories] = useState([]);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [newsRes, articleRes, storyRes, bookRes] =
        await getDashboardData();

      setNews(newsRes.data);
      setArticles(articleRes.data || []);
      setStories(storyRes.data || []);
      setBooks(bookRes.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loader">
        <div className="spinner"></div>
        <h3>Loading Library...</h3>
      </div>
    );
  }

  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <div className="hero">
        <h1>📚 Digital Library Management System</h1>
        <p>Read, Learn & Explore Unlimited Knowledge</p>
      </div>

      {/* NEWS */}
      <section className="section-card">
        <h2>📰 Today’s News</h2>

        {news ? (
          <div className="news-box">
            <h3>{news.heading}</h3>
            <p>{news.body}</p>
          </div>
        ) : (
          <p>No news available</p>
        )}

        <Link to="/news" className="btn-main">View All News</Link>
      </section>

      {/* ARTICLES */}
      <section className="section-card">
        <h2>📖 Latest Articles</h2>

        <div className="grid">
          {articles.slice(0, 3).map((a) => (
            <div key={a.id} className="card">
              <h3>{a.title}</h3>
              <p>{a.content?.substring(0, 120)}...</p>
              <Link to={`/articles/${a.id}`} className="btn-small">Read</Link>
            </div>
          ))}
        </div>

        <Link to="/articles" className="btn-main">View All Articles</Link>
      </section>

      {/* STORY BOOKS */}
      <section className="section-card">
        <h2>📚 Story Books</h2>

        <div className="grid">
          {stories.slice(0, 4).map((s) => (
            <div key={s.id} className="card">
              <h3>{s.title}</h3>
              <p>{s.author}</p>
              <Link to={`/storybooks/${s.id}`} className="btn-small">
                Read
              </Link>
            </div>
          ))}
        </div>

        <Link to="/storybooks" className="btn-main">Explore Stories</Link>
      </section>

      {/* BOOKS */}
      <section className="section-card">
        <h2>📘 Library Books</h2>

        <div className="grid">
          {books.slice(0, 6).map((b) => (
            <div key={b.id} className="card">
              <h3>{b.title}</h3>
              <p>{b.author}</p>
              <Link to={`/books/${b.id}`} className="btn-small">
                View
              </Link>
            </div>
          ))}
        </div>

        <Link to="/books" className="btn-main">Browse Library</Link>
      </section>

    </div>
  );
};

export default HomePage;