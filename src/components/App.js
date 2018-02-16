import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
	constructor() {
		super();
		this.addFish = this.addFish.bind(this);
		this.loadSamples = this.loadSamples.bind(this);
		//initial state
		this.state = {
			fishes: {},
			order: {}
		}
	}

	addFish(fish) {
		//update out state
		const fishes = {...this.state.fishes}
		//add in our new fish
		const timestamp = Date.now();
		fishes[`fish-${timestamp}`] = fish;
		//set state
		this.setState({ fishes: fishes})
	}

	loadSamples() {
		this.setState({
			fishes: sampleFishes
		});
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header cool={true} age="5000" tagline="Fresh Seafood Market"/>
				</div>
				<Order />
				<Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
			</div>
		)
	}
}

export default App;