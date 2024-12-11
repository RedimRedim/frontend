import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    if (!username || !password) {
      return;
    }

    //hit api later
    try {
      const data = { username, password };
      setLoading(true);

      const response = await api.post("/login", data);
      if (response.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, response.data.access_token);
        localStorage.setItem(REFRESH_TOKEN, response.data.refresh_token);
        navigate("/");
      }
    } catch (error) {
      alert(error);
      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <h3>Login Page</h3>
      <div className="mb-3 row">
        <label htmlFor="username" className="col-sm-2 col-form-label">
          Username
        </label>

        <div className="col-sm-10">
          <input type="text" className="form-control" id="username"></input>
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="password" className="col-sm-2 col-form-label">
          Password
        </label>

        <div className="col-sm-10">
          <input type="password" className="form-control" id="password"></input>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
