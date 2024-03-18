import { HashRouter, Routes, Route, Link } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";

const AdminModule = () => {
  return (
    <HashRouter>
      <AdminDashboard />
    </HashRouter>
  );
};
export default AdminModule;

