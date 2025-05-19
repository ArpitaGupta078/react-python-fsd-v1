import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand fw-bold n4" to="/">TimeTidy🐻</Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Centered Nav Links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-5">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" end>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/studyPlanner" className="nav-link">Study Planner</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/schedule" className="nav-link">Schedule</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about-us" className="nav-link">About Us</NavLink>
            </li>
          </ul>

          {/* Login/Register on the right */}
          <div className="d-flex gap-2">
            <Link to="/log-in">
              <button type="button" className="cute-button">Login</button>
            </Link>
            <Link to="/sign-up">
              <button type="button" className="cute-button">Signup</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
