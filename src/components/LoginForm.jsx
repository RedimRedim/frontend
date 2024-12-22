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
      console.log(response);

      if (response.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, response.data.access_token);
        localStorage.setItem(REFRESH_TOKEN, response.data.refresh_token);
        localStorage.setItem("username", username);
        navigate("/");
        alert(`welcome back ${username}`);
      }
    } catch (error) {
      if (error.response.status === 401) {
        alert("Wrong username or password");
      } else {
        alert(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div id="loginContainer" className="container-fluid  bg-dark text-white">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-6 col-lg-3">
            <h3>Login Page</h3>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="col-sm-2 col-form-label">
                  Username
                </label>

                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                  ></input>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="col-sm-2 col-form-label">
                  Password
                </label>

                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                  ></input>
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-25">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
