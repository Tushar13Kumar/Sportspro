import { NavLink } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <h1 className="navbar-brand">Company Logo</h1>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav d-flex flex-row gap-4 ms-3">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/players">
              Players
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/report">
              Report
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
