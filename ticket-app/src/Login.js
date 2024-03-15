import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const loginAuthorization = () => {
    if (email === "" || password === "") {
      setMsg("Sorry ! Empty Email or PassWord");
    } else {
      setMsg("Validating...");
      const url = "http://localhost:1111/auth";
      const inputData = {
        email: email,
        password: password,
      };
      const postData = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(inputData),
      };
      fetch(url, postData)
        .then((res) => res.json())
        .then((userInfo) => {
          setMsg(userInfo.status);
          if (userInfo.id != "") {
            localStorage.setItem("token", userInfo.id);
            localStorage.setItem("name", userInfo.name);
            localStorage.setItem("userType", userInfo.type);
            window.location.reload();
          }
        });
    }
  };
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <p className="text-center text-danger mb-3 message"> {msg}</p>
          <div className="card border-0 shadow-lg">
            <div className="card-header bg-danger text-white">
              <i className="fa fa-lock fa-lg"></i> Login
            </div>
            <div className="card-body ">
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
              <button className="btn btn-primary" onClick={loginAuthorization}>
                Login <i className="fa fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <p className="text-center mt-5 mb-5">
            <Link to={"/register"}>New ? Register</Link>
          </p>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
};
export default Login;
