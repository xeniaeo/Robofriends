import React from 'react';

// Receiving props = { id, name, email }
const Card = ({ id, name, email }) => {
	return (
		<div className='bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
			
			<img alt='robots' src={`https://robohash.org/000${id}?set=set4`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;