import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

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
        userType: "USER",
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
        });
    }
  };
  return (
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-4">
        <p className="text-center text-danger mb-3 message"> {msg}</p>
          <div class="card border-0 shadow-lg">
            <div class="card-header bg-danger text-white">
              <i class="fa fa-user-plus fa-lg"></i> Create Account
            </div>
            <div class="card-body ">
              <div class="mb-4">
                <label> Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div class="mb-4">
                <label> Mobile No</label>
                <input
                  type="number"
                  class="form-control"
                  onChange={(e) => setMobile(e.target.value)}
                  value={mobile}
                />
              </div>
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
                <label> Password</label>
                <input
                  type="password"
                  class="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>
            <div class="card-footer text-center">
              <button class="btn btn-primary" onClick={save}>
                Submit <i class="fa fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <p class="text-center mt-5 mb-5">
            <Link to={"/login"}>Have an Account ? Login</Link>
          </p>
        </div>
        <div class="col-lg-4"></div>
      </div>
    </div>
  );
};
export default Register;
