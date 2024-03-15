import { HashRouter, Routes, Route, Link } from "react-router-dom";
import UserDashboard from "./UserDashboard";

const UserModule = () => {
  return (
    <HashRouter>
      <h1>Welcome User Module</h1>
      <UserDashboard />
      <button onClick={logout}>Logout</button>
    </HashRouter>
  );
};
export default UserModule;
const logout = () => {
  localStorage.clear();
  window.location.reload();
};
