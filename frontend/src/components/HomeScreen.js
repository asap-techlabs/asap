import React from 'react';
import Navbar from './Navbar.js'
import CardList from './CardList.js'
import Footer from './Footer.js'
import './HomeScreen.css';
import { HashLink as Link } from "react-router-hash-link";

// this functions displays the homepage to the user
function HomeScreen() {
	return (
    <div className="page-container">
      <Navbar />
      <h1 className="title-banner">We bring you everything</h1>
      <h2 className="subtitle-banner">
        Deliveries from one end of the city to the other. Books, keys, food,
        gifts, everything that fits in a small package, we take it!
        <br></br>
        Forgot the keys? No worries, ASAP brings them to you
      </h2>
      <Link to="/#cards">
        <button className="btn btn-success button-home">Try it!</button>
      </Link>
      <CardList />
      <Footer />
    </div>
  );
}


export default HomeScreen;
