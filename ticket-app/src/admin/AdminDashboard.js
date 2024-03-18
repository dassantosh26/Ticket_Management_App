import { Link } from "react-router-dom";
const AdminDashboard = () => {
  return (
    <div className='container mt-4'>
    <div className='row'>
        <div className="col-xl-12 text-center mb-5">
            <h1 style={{color : "navy"}}> My Dashboard </h1>
        </div>

        {/* <div className="col-lg-1"></div> */}
        <div className="col-lg-2 text-center dashboard-box">
            <i className="fa-solid fa-users fa-3x text-primary pb-3"></i>
            <h5> Active Accounts : 12 </h5>
        </div>
        <div className="col-lg-2 text-center dashboard-box">
            <i className="fa-solid fa-ticket fa-3x text-secondary pb-3"></i>
            <h5> New Tickets : 15 </h5>
        </div>
        <div className="col-lg-2 text-center dashboard-box">
            <i className="fa-solid fa-user-check fa-3x text-warning pb-3"></i>
            <h5> Assigned Tickets : 4 </h5>
        </div>
        <div className="col-lg-2 text-center dashboard-box">
            <i className="fa-solid fa-folder-open fa-3x text-danger pb-3"></i>
            <h5> Open Tickets : 6 </h5>
        </div>
        <div className="col-lg-2 text-center dashboard-box">
            <i className="fa fa-square-check fa-3x text-success pb-3"></i>
            <h5> Closed Tickets : 5 </h5>
        </div>
        {/* <div className="col-lg-1"></div> */}
    </div>
</div>
  );
};

export default AdminDashboard;
