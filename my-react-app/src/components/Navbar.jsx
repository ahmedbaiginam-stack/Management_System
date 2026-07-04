import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name");

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">

        <Link className="navbar-brand" to="/">
          📚 Digital Library
        </Link>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav me-auto">

            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/books">Books</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/articles">Articles</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/storybooks">Story Books</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/news">News</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/questions">Question Bank</Link></li>

            {token && role === "ROLE_USER" && (
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">👤 Dashboard</Link>
              </li>
            )}

            {token && role === "ROLE_ADMIN" && (
              <li className="nav-item">
                <Link className="nav-link" to="/admin">🛠 Admin</Link>
              </li>
            )}

          </ul>

          <ul className="navbar-nav align-items-center">

            {token ? (
              <>
                <li className="nav-item">
                  <span className="nav-link text-white">
                    Welcome, <b>{name}</b>
                  </span>
                </li>

                <li className="nav-item ms-2">
                  <button className="btn btn-danger" onClick={logout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item me-2">
                  <Link className="btn btn-light" to="/login">Login</Link>
                </li>

                <li className="nav-item">
                  <Link className="btn btn-warning" to="/register">Register</Link>
                </li>
              </>
            )}

          </ul>

        </div>
      </div>
    </nav>
  );
}