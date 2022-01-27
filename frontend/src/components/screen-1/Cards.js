import React from 'react';
import ReactDOM from 'react-dom';
import './Cards.css';


function App () {
	return (
		<div className='wrapper'>
			<Card 
				img='https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
				title='Books' 
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />

			<Card 
				img='https://images.unsplash.com/photo-1575908539614-ff89490f4a78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80'
				title='Keys' 
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />

			<Card 
				img='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
				title='Food' 
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />

			<Card 
				img='https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80'
				title='Other' 
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
		</div>
	)
}

function Card (probs) {
	return (
		<div className='card'>
			<div className='card_body'>
				<img src={probs.img} class='card_image'/>
				<h2 className='card_title'>{probs.title}</h2>
				<p className='card_description'>{probs.description}</p>
			</div>
			<button className='card_btn'>Let's Go</button>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
