import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.js'
import CardList from './CardList.js'
import Footer from './Footer.js'
import './HomeScreen.css';


function HomeScreen() {
	return (
		<div className='page-container'>
			<Navbar />
			<CardList />
			<Footer />
		</div>
	)
}


export default HomeScreen;