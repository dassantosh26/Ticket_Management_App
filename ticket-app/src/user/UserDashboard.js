import { Link } from "react-router-dom";
const UserDashboard = () => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-custom sticky-top">
        <div className="container">
          <Link className="navbar-brand">
            <i className="fa-solid fa-handshake fa-2xl mx-2 my-icon "></i>
            We Help
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
                <Link className="nav-link active" to={"/"}>
                  <i className="fa fa-home"></i> My Dashboard
                </Link>
              </li>

              <li className="nav-item me-4">
                <Link className="nav-link active" to={"/ticket"}>
                  <i className="fa-solid fa-ticket-simple"></i> My Ticket
                </Link>
              </li>

              <li className="nav-item me-4">
                <Link
                  className="nav-link active"
                  to={"/logout"}
                  onClick={logout}
                >
                  <i className="fa-solid fa-power-off my-icon"></i>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <h3 className="text-center text-info mb-5">Dashboard</h3>
            <div className="row mb-3">
              <div className="col-lg-3 col-md-4 col-sm-6 me-4 mb-3 fs-3 card shadow-sm">
                <br />
                <i className="fa-solid fa-folder-tree fa-xl icon-5"></i>
                <br />
                All Tickets : 4
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 me-4 mb-3 fs-3 card shadow-sm">
                <br />
                <i className="fa-solid fa-user-pen icon-2 fa-xl"></i>
                <br />
                Assigned Tickets : 8
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 me-4 mb-3 fs-3 card shadow-sm">
                <br />
                <i className="fa-regular fa-folder-open icon-3 fa-xl"></i>
                <br />
                Open Tickets : 10
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 me-4 mb-3 fs-3 card shadow-sm">
                <br />
                <i className="fa-regular fa-square-check icon-4 fa-xl"></i>
                <br />
                Closed Tickets : 9
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
