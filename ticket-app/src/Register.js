import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-4">
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
              <button class="btn btn-primary">
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
