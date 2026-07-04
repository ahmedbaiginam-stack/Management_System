import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Login() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "ROLE_USER",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ================= LOGIN =================
      if (isLogin) {
        const res = await API.post("/auth/login", {
          email: formData.email,
          password: formData.password,
        });

        const { token, role, name, userId } = res.data;

        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        localStorage.setItem("name", name);
        localStorage.setItem("userId", userId);

        alert("Login Successful");

        // ROLE BASED REDIRECT
        if (role === "ROLE_ADMIN") {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }
      }

      // ================= REGISTER =================
      else {
        const res = await API.post("/auth/register", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        });

        alert(res.data.message || "Registration Successful");

        setIsLogin(true);

        setFormData({
          name: "",
          email: "",
          password: "",
          role: "ROLE_USER",
        });
      }

    } catch (err) {
      console.error(err);

      alert(
        err.response?.data?.message ||
        "Login/Registration failed"
      );
    }
  };

  return (
    <div style={wrapperStyle}>
      <div style={cardStyle}>
        <h2 style={{ textAlign: "center" }}>
          {isLogin ? "Login" : "Register"}
        </h2>

        <form onSubmit={handleSubmit}>

          {/* ================= REGISTER FIELDS ================= */}
          {!isLogin && (
            <>
              <label>Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={inputStyle}
                required
              />

              <label>Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="ROLE_USER">User</option>
                <option value="ROLE_ADMIN">Admin</option>
              </select>
            </>
          )}

          {/* ================= COMMON FIELDS ================= */}
          <label>Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <button style={btnStyle}>
            {isLogin ? "Login" : "Register"}
          </button>

        </form>

        <p style={{ textAlign: "center" }}>
          {isLogin ? "Don't have account?" : "Already have account?"}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            style={linkBtn}
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const wrapperStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "#f4f6fb",
};

const cardStyle = {
  width: "400px",
  padding: "30px",
  borderRadius: "10px",
  background: "white",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  marginTop: "5px",
  border: "1px solid #ccc",
  borderRadius: "6px",
};

const btnStyle = {
  width: "100%",
  padding: "12px",
  background: "#1e3c72",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const linkBtn = {
  border: "none",
  background: "none",
  color: "#1e3c72",
  cursor: "pointer",
  marginLeft: "5px",
};