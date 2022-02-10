import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';


function Cards () {
	return (
		<div className='wrapper' style={{marginTop: "30px"}}>
			<Card
				img='https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
				title='Books'
				description='Send books or items that fits in a small box' />

			<Card
				img='https://images.unsplash.com/photo-1575908539614-ff89490f4a78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80'
				title='Keys'
				description='Send keys or small items that fits in an envelope' />

			<Card
				img='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
				title='Food'
				description='Send food properly stored in airtight containers' />

			<Card
				img='https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80'
				title='Other'
				description='Send other small items' />
		</div>
	)
}

function Card (props) {
	return (
		<div className='card'>
			<div className='card_body'>
				<img src={props.img} alt='decoration' className='card_image'/>
				<h2 className='card_title'>{props.title}</h2>
				<p className='card_description'>{props.description}</p>
			</div>
			<Link to="/search">
				<button className='card_btn'>Let's Go</button>
			</Link>
		</div>
	)
}

export default Cards;
