import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

// App component
class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	// Use arrow function to make sure 'this' value comes from SearchBox.js (where it's created)
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value}) // Update searchfield
		
	}

	render() {
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots={filteredRobots}/>
			</div>
		);
	}		
}

export default App;