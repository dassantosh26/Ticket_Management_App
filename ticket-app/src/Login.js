import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const loginAuthorization = () => {
    if (email === "" || password === "") {
      setMsg("Sorry ! Enter Email or PassWord");
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
          setEmail("");
          setPassword("");
        });
    }
  };
  return (
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-4">
          <h4 className="text-center text-info mb-3"> {msg}</h4>
          <div class="card border-0 shadow-lg">
            <div class="card-header bg-danger text-white">
              <i class="fa fa-lock fa-lg"></i> Login
            </div>
            <div class="card-body ">
              <div class="mb-4">
                <label> Email Id</label>
                <input
                  type="email"
                  class="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div class="mb-4">
                <label> PassWord</label>
                <input
                  type="password"
                  class="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>
            <div class="card-footer text-center">
              <button class="btn btn-primary" onClick={loginAuthorization}>
                Login <i class="fa fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <p class="text-center mt-5 mb-5">
            <Link to={"/register"}>New ? Register</Link>
          </p>
        </div>
        <div class="col-lg-4"></div>
      </div>
    </div>
  );
};
export default Login;
