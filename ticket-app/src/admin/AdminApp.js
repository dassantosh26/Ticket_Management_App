import { HashRouter, Routes, Route, Link } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";

const AdminModule = () => {
  return (
    <HashRouter>
      <h1>Welcome To Admin Module</h1>
      <AdminDashboard />
      <button onClick={logout}>Logout</button>
    </HashRouter>
  );
};
export default AdminModule;

const logout = () => {
  localStorage.clear();
  window.location.reload();
};
