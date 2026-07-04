import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="container mt-5">

      <h2 className="mb-4 text-center">
        Admin Dashboard
      </h2>

      <div className="row g-4">

        <div className="col-md-4">
          <div className="card shadow text-center p-4">
            <h4>📚 Books</h4>

            <Link
              to="/admin/books"
              className="btn btn-primary mt-3"
            >
              Manage Books
            </Link>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow text-center p-4">
            <h4>👥 Users</h4>

            <Link
              to="/admin/users"
              className="btn btn-success mt-3"
            >
              Manage Users
            </Link>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow text-center p-4">
            <h4>📰 News</h4>

            <Link
              to="/admin/news"
              className="btn btn-warning mt-3"
            >
              Manage News
            </Link>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow text-center p-4">
            <h4>📝 Articles</h4>

            <Link
              to="/admin/articles"
              className="btn btn-info mt-3"
            >
              Manage Articles
            </Link>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow text-center p-4">
            <h4>📖 Borrow Records</h4>

            <Link
              to="/admin/borrow-records"
              className="btn btn-danger mt-3"
            >
              View Records
            </Link>
          </div>
        </div>
          <div className="col-md-4">
            <div className="card shadow text-center p-4">
              <h4>❓ Questions</h4>

              <Link
                to="/admin/questions"
                className="btn btn-secondary mt-3"
>
                Manage Questions
              </Link>
            </div>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;