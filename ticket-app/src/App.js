import UserModule from "./user/UserApp";
import AdminModule from "./admin/AdminApp";
import PublicModule from "./PublicModule";

function App() {
  if (localStorage.getItem("userType") === "ADMIN") {
    return <AdminModule />;
  } else if (localStorage.getItem("userType") === "USER") {
    return <UserModule />;
  } else {
    return <PublicModule />;
  }
}

export default App;
