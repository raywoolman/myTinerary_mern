import React, {Component} from 'react';
import {BrowserRouter, Route } from "react-router-dom";
import './style/main.css';

//routes:
import Home from './components/Home'
import Cities from './components/Cities'
import Itineraries from './components/Itineraries'
import CreateAccount from './components/CreateAccount'
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="viewport">
            <Route exact path='/' component={Home}/>
            <Route path='/cities' component={Cities}/>
            <Route path='/itineraries' component={Itineraries}/>
            <Route path='/login' component={Login}/>
            <Route path='/createaccount' component={CreateAccount}/>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;