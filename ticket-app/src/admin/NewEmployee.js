import { useState, useEffect } from "react";
const NewEmployee = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [allEmp, setAllEmp] = useState([]);

  const save = () => {
    if (name === "" || mobile === "" || email === "" || password === "") {
      setMsg("Sorry ! Empty Name or Mobile or Email or PassWord");
    } else {
      setMsg("Registering...");
      const url = "http://localhost:1111/auth";
      const inputData = {
        fullName: name,
        mobile: mobile,
        email: email,
        password: password,
        userType: "EMPLOYEE",
      };
      const postData = {
        headers: { "Content-Type": "application/json" },
        method: "PUT",
        body: JSON.stringify(inputData),
      };
      fetch(url, postData)
        .then((res) => res.json())
        .then((userInfo) => {
          setMsg(userInfo.message);
          setName("");
          setMobile("");
          setEmail("");
          setPassword("");
          getEmp(); //To reload the list after adding new employee
        });
    }
  };

  const getEmp = () => {
    const url = "http://localhost:1111/auth";
    fetch(url)
      .then((res) => res.json())
      .then((empArray) => {
        setAllEmp(empArray);
      });
  };

  useEffect(() => {
    getEmp();
  }, []);
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-3">
          <p className="text-center text-danger mb-3 message"> {msg}</p>
          <div className="card border-0 shadow-lg">
            <div className="card-header bg-danger text-white">
              <i className="fa fa-user-plus fa-lg"></i> Create Account
            </div>
            <div className="card-body ">
              <div className="mb-4">
                <label> Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="mb-4">
                <label> Mobile No</label>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) => setMobile(e.target.value)}
                  value={mobile}
                />
              </div>
              <div className="mb-4">
                <label> Email Id</label>
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="mb-4">
                <label> Password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>
            <div className="card-footer text-center">
              <button className="btn btn-primary" onClick={save}>
                Submit <i className="fa fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <h3 className="text-center text-info mb-3">Employee List</h3>
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
                if (emp.userType === "EMPLOYEE" || emp.userType === "ADMIN")
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
export default NewEmployee;
