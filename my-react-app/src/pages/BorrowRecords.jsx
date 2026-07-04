import { useEffect, useState } from "react";
import API from "../services/api";

const BorrowRecords = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRecords();
  }, []);

  // ================= LOAD RECORDS =================
  const loadRecords = async () => {
    try {
      setLoading(true);
      const res = await API.get("/admin/borrow-records");
      setRecords(res.data || []);
    } catch (err) {
      console.log("Load Error:", err.response || err);
    } finally {
      setLoading(false);
    }
  };

  // ================= RETURN ITEM =================
  const returnItem = async (borrowId) => {
    try {
      await API.post(`/user/return/${borrowId}`);

      // ✅ safest way → reload data
      loadRecords();

    } catch (err) {
      console.log("Return Error:", err.response || err);
      alert(err.response?.data?.message || "Return failed");
    }
  };

  // ================= DELETE RECORD =================
  const deleteRecord = async (id) => {
    if (!window.confirm("Delete this borrow record?")) return;

    try {
      await API.delete(`/admin/borrow-records/${id}`);

      // remove from UI instantly
      setRecords((prev) => prev.filter((r) => r.id !== id));

    } catch (err) {
      console.log("Delete Error:", err.response || err);
      alert("Delete failed");
    }
  };

  // ================= FORMAT DATE =================
  const formatDate = (dateValue) => {
    if (!dateValue) return "-";
    return new Date(dateValue).toLocaleDateString();
  };

  if (loading) {
    return (
      <div className="container mt-4">
        <h2>Borrow Records</h2>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Borrow Records</h2>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>User</th>
            <th>Item</th>
            <th>Type</th>
            <th>Borrow Date</th>
            <th>Due Date</th>
            <th>Return Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {records.length === 0 ? (
            <tr>
              <td colSpan="8" className="text-center">
                No records found
              </td>
            </tr>
          ) : (
            records.map((record) => {
              const isReturned = record.status === "RETURNED";

              return (
                <tr key={record.id}>
                  <td>{record.userName}</td>
                  <td>{record.bookTitle}</td>
                  <td>{record.itemType}</td>

                  <td>{formatDate(record.borrowDate)}</td>
                  <td>{formatDate(record.dueDate)}</td>
                  <td>{formatDate(record.returnDate)}</td>

                  <td>
                    {isReturned ? (
                      <span className="badge bg-success">Returned</span>
                    ) : (
                      <span className="badge bg-danger">Borrowed</span>
                    )}
                  </td>

                  <td>
                    {!isReturned && (
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => returnItem(record.id)}
                      >
                        Return
                      </button>
                    )}

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteRecord(record.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowRecords;