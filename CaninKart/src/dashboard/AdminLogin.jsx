import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND}/api/admin/login`, {
        email,
        password,
      },{
  headers: { "Content-Type": "application/json" }
      });

      setMsg("✅ Login successful!");

      // OPTIONAL: If backend returns token
      // localStorage.setItem("adminToken", res.data.token);

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (err) {
      setMsg(err.response?.data?.message || "❌ Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="p-8 rounded-2xl shadow-md w-full max-w-sm bg-white"
        autoComplete="off"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full ${
            loading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
          } text-white py-2 rounded`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <p className="mt-3 text-center text-sm text-red-600">{msg}</p>
      </form>
    </div>
  );
};

export default AdminLogin;
