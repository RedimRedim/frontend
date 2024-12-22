import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const location = useLocation(); // Current location object

  const [isAuthorized, setIsAuthorized] = useState(null);

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);

    try {
      const response = await api.post(
        "/token/refresh",
        {
          refresh_token: refreshToken,
        },
        {
          contentType: "application/json",
        }
      );

      if (response.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, response.data.access_token);
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
        //if token is invalid or expired
      }
    } catch (error) {
      console.log(error);
      setIsAuthorized(false);
      navigate("/login");
    }
  };

  const auth = async () => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (!accessToken) {
      setIsAuthorized(false);
      navigate("/login");
      return;
    }

    const decoded = jwtDecode(accessToken);
    const tokenExpiration = decoded.exp;

    if (tokenExpiration < Date.now() / 1000) {
      await refreshToken();
    } else {
      setIsAuthorized(true);
    }
  };

  useEffect(() => {
    auth();
  }, [location.pathname]); // Trigger on route changes

  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  return isAuthorized ? children : null;
}

export default ProtectedRoute;
