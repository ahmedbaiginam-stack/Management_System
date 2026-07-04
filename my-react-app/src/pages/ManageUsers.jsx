import { useEffect, useState } from "react";
import API from "../services/api";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  const [editingUser, setEditingUser] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    outstandingFines: 0,
  });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const res = await API.get("/admin/users");
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    try {
      await API.delete(`/admin/users/${id}`);
      loadUsers();
    } catch (err) {
      console.log(err);
      alert("Unable to delete user.");
    }
  };

  const editUser = (user) => {
    setEditingUser(user.id);

    setForm({
      name: user.name,
      email: user.email,
      role: user.role,
      outstandingFines: user.outstandingFines,
    });
  };

  const updateUser = async () => {
    try {
      await API.put(`/admin/users/${editingUser}`, form);

      setEditingUser(null);

      loadUsers();

      alert("User Updated Successfully");
    } catch (err) {
      console.log(err);
      alert("Update failed");
    }
  };

  return (
    <div className="container mt-4">

      <h2>Manage Users</h2>

      {editingUser && (
        <div className="card p-3 mb-4">

          <h4>Edit User</h4>

          <input
            className="form-control mb-2"
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            className="form-control mb-2"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <select
            className="form-control mb-2"
            value={form.role}
            onChange={(e) =>
              setForm({ ...form, role: e.target.value })
            }
          >
            <option value="ROLE_USER">ROLE_USER</option>
            <option value="ROLE_ADMIN">ROLE_ADMIN</option>
          </select>

          <input
            type="number"
            className="form-control mb-3"
            value={form.outstandingFines}
            onChange={(e) =>
              setForm({
                ...form,
                outstandingFines: e.target.value,
              })
            }
          />

          <button
            className="btn btn-success me-2"
            onClick={updateUser}
          >
            Update
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => setEditingUser(null)}
          >
            Cancel
          </button>

        </div>
      )}

      <table className="table table-bordered table-hover">

        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Fine</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {users.map((user) => (
            <tr key={user.id}>

              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>₹ {user.outstandingFines}</td>

              <td>

                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => editUser(user)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default ManageUsers;