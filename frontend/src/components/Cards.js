import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';



function Cards ({img, title, description}) {
	return (
		<div className='card'>
			<div className='card_body'>
				<img src={img} alt='decoration' className='card_image'/>
				<h2 className='card_title'>{title}</h2>
				<p className='card_description'>{description}</p>
			</div>
			<Link to="/search">
				<button className='card_btn'>Let's Go</button>
			</Link>
		</div>
	)
}

export default Cards;