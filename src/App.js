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
import Stocks from './components/stocks/Stocks';



class App extends Component {

	componentDidMount() {
    this.setState({stocks: stockData});
  }

  render() {
  	return (
      <div>
  		  <Header />
          <div className="container">
           	<Switch>
           		<Route exact path='/' component={ Home } />
           		<Route exact path='/About' component={ About } />
           		<Route exact path="/stocks" render={() => <Stocks stocks={this.state.stocks} />} />
         		</Switch>
  			  </div>
      </div>
    );
  }
}

export default App;

