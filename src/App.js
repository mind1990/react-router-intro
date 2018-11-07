import React, { Component } from 'react';
import './styles/App.css';
import {
	Route,
	Link,
	Switch
} from 'react-router-dom';

import Header from './components/layouts/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import stockData from './data/stock-data.json';



class App extends Component {

	componentDidMount() {
    this.setState({stocks: stockData});
  }

  render() {
    return (
			<header>
        <h1>Learn Routing</h1>
          <nav>
            {/* Create our nav bar links using the Link element from react router */}
             <ul>
             	<li><Link to="/">Home</Link></li>
             	<li><Link to="/About">About</Link></li>
             </ul>
        	 </nav>
           	{/* Create the routes. This will not appear on the page. */}
             <div className="main">
             	<Switch>
             		<Route exact path='/' component={ Home } />
             		<Route exact path='/About' component={ About } />
           		</Switch>
								</div>
           </header>
        );
    }
}

export default App;

