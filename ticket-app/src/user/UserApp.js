import { HashRouter, Routes, Route, Link } from "react-router-dom";
import UserDashboard from "./UserDashboard";

const UserModule = () => {
  return (
    <HashRouter>
      <UserDashboard />
    </HashRouter>
  );
};
export default UserModule;
