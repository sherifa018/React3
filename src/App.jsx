import { useState } from "react";
import AdminDashboard from "./AdminDashboard";
import UserDashBoard from "./UserDashBoard";
import Form from "./Form";
// import Myform from "./Myform";

function App() {
  const [role, setrole] = useState("");

  const handleLogin = (nameInput, passwordInput) => {
    if (nameInput == "admin" && passwordInput == "admin") {
      setrole("admin");
    } else if (nameInput == "user" && passwordInput == "user") {
      setrole("user");
    } else alert("Invalid Input,Try Again");
  };
  return (
    <div>
      <div>
        {role === "admin" && <AdminDashboard />}
        {role === "user" && <UserDashBoard />}
        {role === "" && <Form onLogin={handleLogin} />}
      </div>
    </div>
  );
}

export default App;
