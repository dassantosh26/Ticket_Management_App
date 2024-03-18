import { Link } from "react-router-dom";
const UserDashboard = () => {
 
  return (
    <div className='container mt-4'>
            <div className='row'>
                <div className="col-xl-12 text-center mb-5">
                    <h1 style={{color : "navy"}}> My Dashboard </h1>
                </div>

                <div className="col-lg-1"></div>
                <div className="col-lg-2 text-center dashboard-box">
                    <i className="fa-regular fa-folder-open fa-3x text-primary pb-3"></i>
                    <h5> All Tickets : 2 </h5>
                </div>
                <div className="col-lg-2 text-center dashboard-box">
                    <i className="fa-solid fa-user-check fa-3x text-warning pb-3"></i>
                    <h5> Assigned Tickets : 0 </h5>
                </div>
                <div className="col-lg-2 text-center dashboard-box">
                    <i className="fa-solid fa-folder-open fa-3x text-danger pb-3"></i>
                    <h5> Open Tickets : 1 </h5>
                </div>
                <div className="col-lg-2 text-center dashboard-box">
                    <i className="fa fa-square-check fa-3x text-success pb-3"></i>
                    <h5> Closed Tickets : 1 </h5>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
  );
};

export default UserDashboard;
