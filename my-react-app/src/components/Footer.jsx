import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div>
          <h2>📚 Digital Library</h2>
          <p>Learn, Read, and Grow Knowledge Every Day</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/books">Books</a>
          <a href="/articles">Articles</a>
          <a href="/storybooks">Story Books</a>
        </div>

        <div>
          <h3>Contact</h3>
          <p>Email: support@library.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Digital Library. All Rights Reserved.
      </div>
    </footer>
  );
}