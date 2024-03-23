import { HashRouter, Routes, Route, Link } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import AdminTicket from "./AdminTicket";
import NewEmployee from "./NewEmployee";
import ManageUser from "./MangeUser";

const AdminModule = () => {
  return (
    <HashRouter>
      <nav className="navbar navbar-expand-sm navbar-dark sticky-top">
        <div className="container">
          <Link className="navbar-brand">
            <i className="fa fa-handshake fa-lg text-warning"></i> We Help
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/">
                  <i className="fa-solid fa-square-poll-vertical"></i> Admin
                  Dashboard
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/userList">
                  <i className="fa-solid fa-users"></i> Manage User
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/adminTicket">
                  <i className="fa-solid fa-ticket"></i> Tickets
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/newEmp">
                  <i className="fa-solid fa-user-tie"></i> Manage Employee
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-warning" onClick={logout}>
                  <i className="fa fa-power-off"></i>
                  {localStorage.getItem("name")} - Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route exact path="/" element={<AdminDashboard />} />
        <Route exact path="/adminTicket" element={<AdminTicket />} />
        <Route exact path="/newEmp" element={<NewEmployee />} />
        <Route exact path="/userList" element={<ManageUser />} />
      </Routes>
    </HashRouter>
  );
};
export default AdminModule;
const logout = () => {
  localStorage.clear();
  window.location.href = "http://localhost:3000/#/";
  window.location.reload();
};
