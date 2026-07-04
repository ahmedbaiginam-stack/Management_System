import { useEffect, useState } from "react";
import API from "../services/api";

export default function UserDashboard() {

  const userId = localStorage.getItem("userId");
  const [records, setRecords] = useState([]);

  useEffect(() => {
    loadBorrowedBooks();
  }, []);

  const loadBorrowedBooks = async () => {
    try {
      const res = await API.get(
        `/user/borrowed-items?userId=${userId}`
      );

      setRecords(res.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-4">

      <h2>My Borrowed Items</h2>

      <table className="table table-bordered mt-4">

        <thead>
          <tr>
            <th>Item</th>
            <th>Borrow Date</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {records.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center">
                No records found
              </td>
            </tr>
          ) : (
            records.map((item) => {

              const isReturned = item.status === "RETURNED";

              return (
                <tr key={item.id}>
                  <td>{item.bookTitle}</td>
                  <td>{item.borrowDate}</td>
                  <td>{item.dueDate}</td>

                  <td>
                    {isReturned ? "Returned" : "Borrowed"}
                  </td>
                </tr>
              );
            })
          )}

        </tbody>

      </table>

    </div>
  );
}