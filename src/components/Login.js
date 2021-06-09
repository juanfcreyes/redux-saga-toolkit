import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { login } from "../reducers/authReducer";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username) {
      Swal.fire("No Username", "You should put an username to enter", "info");
    }
    dispatch(login(username));
  };

  return (
    <form className="container mt-3 row g-3" onSubmit={handleSubmit}>
      <input
        className="form-control"
        type="text"
        id="username"
        autoComplete="off"
        placeholder="Username"
        value={username}
        onChange={handleChange}
      />

      <button className="btn btn-primary mb-3" type="submit">
        Enter
      </button>
    </form>
  );
};

export default Login;
