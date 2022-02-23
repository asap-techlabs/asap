import React from "react"
import './Navbar.css';
import logo from "../images/asap-nobg.png"
import { Link } from "react-router-dom";

//displays the navbar
function Navbar () {
	return (
    <nav>
      <Link to="/">
        <img src={logo} alt="asap-logo" className="nav-icon" />
      </Link>
      <div>
        <Link to="/login">
          <button type="submit" className="btn btn-success button">
            Login
          </button>
        </Link>
        <Link to="/login">
          <button type="submit" className="btn btn-outline-success button">
            Sign-up
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
