import { HashRouter, Link } from "react-router-dom";
const AdminDashboard = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-custom sticky-top">
        <div className="container">
          <a className="navbar-brand">
            <i className="fa-solid fa-handshake fa-2xl mx-2 my-icon "></i>
            We Help
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
                <Link className="nav-link active" to={"/"}>
                  <i className="fa fa-home"></i> Admin Dashboard
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to={"/account"}>
                  <i className="fa-regular fa-user"></i> Account
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to={"/ticket"}>
                  <i className="fa-solid fa-ticket-simple"></i> My Ticket
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to={"/newAccount"}>
                  <i className="fa-solid fa-user-plus"></i> Add New Account
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to={"/logout"}>
                  <i className="fa-solid fa-power-off my-icon"></i> Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <div className="row">
          <h3 className="text-center text-info mb-5">Dashboard</h3>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          <div className="col me-4 mb-3 fs-3"><br />
            <i class="fa-solid fa-user-group icon-1 fa-xl"></i>
            <br />
            Active Accounts : 12
          </div>
          <div className="col me-4 mb-3 fs-3"><br />
            <i className="fa-solid fa-ticket-simple fa-xl"></i>
            <br />
            New Tickets : 5
          </div>
          <div className="col me-4 mb-3 fs-3"><br />
            <i className="fa-solid fa-user-pen icon-2 fa-xl"></i>
            <br />
            Assigned Tickets : 8
          </div>
          <div className="col me-4 mb-3 fs-3"><br />
            <i className="fa-regular fa-folder-open icon-3 fa-xl"></i>
            <br />
            Open Tickets : 10
          </div>
          <div className="col me-4 mb-3 fs-3"><br />
            <i className="fa-regular fa-square-check icon-4 fa-xl"></i>
            <br />
            Closed Tickets : 9
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
