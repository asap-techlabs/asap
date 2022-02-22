import React from "react"
import './Navbar.css';
import logo from "../images/asap-nobg.png"

function Navbar () {
	return (
    <nav>
      <img src={logo} alt="asap-logo" className="nav-icon" />
      <button type="submit" className="btn btn-success button">
        Login
      </button>
      <button type="submit" className="btn btn-outline-success button">
        Sign-up
      </button>
    </nav>
  );
}

export default Navbar;
