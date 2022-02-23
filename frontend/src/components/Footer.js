import React from "react"
import './Footer.css';

// displays the footer
function Footer () {
	return (
    <footer>
      <div>
        <p className="footer-copy">
          Copyright 2022 - Made during TechLabs Winter 2021/2022
        </p>
      </div>
      <div className="footer-elements">
        <p className="footer-copy">Jobs</p>
        <p className="footer-copy">Data protection</p>
        <p className="footer-copy">About Us</p>
      </div>
    </footer>
  );
}

export default Footer;
