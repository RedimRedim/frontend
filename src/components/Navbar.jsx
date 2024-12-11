import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../css/Navbar.css";

function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <>
      <nav className="navbar bg-dark h-100">
        <div className="navbar-links">
          <Link
            to="/"
            className={`nav-link ${activeLink === "/" ? "active" : ""}`}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </Link>
          <Link
            to="/files"
            className={`nav-link ${activeLink === "/files" ? "active" : ""}`}
            onClick={() => handleLinkClick("/files")}
          >
            Files
          </Link>

          <Link
            to="/logout"
            className={`nav-link ${activeLink === "/logout" ? "active" : ""}`}
            onClick={() => handleLinkClick("/logout")}
          >
            Logout
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
