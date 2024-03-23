import { useState, useEffect } from "react";
const ManageUser = () => {
  const [allEmp, setAllEmp] = useState([]);
  const getEmp = () => {
    const url = "http://localhost:1111/auth";
    fetch(url)
      .then((res) => res.json())
      .then((empArray) => {
        setAllEmp(empArray.reverse());
      });
  };

  useEffect(() => {
    getEmp();
  }, []);
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-12">
          <h3 className="text-center text-info mb-3">User List</h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Mobile No</th>
                <th>Email-Id</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {allEmp.map((emp, index) => {
                if (emp.userType === "USER")
                  return (
                    <tr key={index}>
                      <td>{emp.fullName}</td>
                      <td>{emp.mobile}</td>
                      <td>{emp.email}</td>
                      <td>{emp.password}</td>
                    </tr>
                  );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ManageUser;
