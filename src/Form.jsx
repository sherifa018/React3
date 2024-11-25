import "./Form.css";
import { useState } from "react";

const Form = ({ onLogin }) => {
  const [nameInput, setNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(nameInput, passwordInput);
  };
  return (
    <form className="Formstyle" onSubmit={handleSubmit}>
      <label>UserName</label>
      <br />
      <input
        value={nameInput}
        onChange={(event) => {
          setNameInput(event.target.value);
        }}
      />
      <br />
      <hr />
      <label>Password</label>
      <br />
      <input
        value={passwordInput}
        onChange={(event) => {
          setPasswordInput(event.target.value);
        }}
      />
      <br />
      <hr />
      <button>Login</button>
    </form>
  );
};
export default Form;
