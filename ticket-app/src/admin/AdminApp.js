import { HashRouter, Routes, Route, Link } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";

const AdminModule = () => {
  return (
    <HashRouter>
      <nav className="navbar navbar-expand-sm navbar-dark sticky-top">
        <div className="container">
          <a className="navbar-brand">
            {" "}
            <i className="fa fa-handshake fa-lg text-warning"></i> We Help{" "}
          </a>
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
                  {" "}
                  <i class="fa-solid fa-square-poll-vertical"></i> Admin
                  Dashboard{" "}
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/login">
                  {" "}
                  <i className="fa-solid fa-house-user"></i> Account{" "}
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/login">
                  {" "}
                  <i className="fa-solid fa-ticket"></i> My Tickets{" "}
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/register">
              
                  <i className="fa-solid fa-user-plus"></i> Add New Account{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-warning" onClick={logout}>
                  
                  <i className="fa fa-power-off"></i>{" "}
                  {localStorage.getItem("name")} - Logout{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route exact path="/" element={<AdminDashboard />} />
      </Routes>
    </HashRouter>
  );
};
export default AdminModule;
const logout = () => {
  localStorage.clear();
  window.location.reload();
};
