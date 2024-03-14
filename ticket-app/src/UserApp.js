import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const UserModule = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </HashRouter>
  );
};
export default UserModule;
