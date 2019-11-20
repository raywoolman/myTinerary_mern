import React, {Component} from 'react';
import {BrowserRouter, Route } from "react-router-dom";
import './style/main.css';

//routes:
import Home from './components/Home'
import Cities from './components/Cities'
import Itineraries from './components/Itineraries'
import CreateAccount from './components/createAccount/CreateAccount'
import Login from './components/Login'
import NavBar from './components/layout/NavBar'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div className="App">
          <NavBar />

            <div className="viewport">

              <Route exact path='/' component={Home}/>
              <Route path='/cities' className="viewport" component={Cities}/>
              <Route path='/itineraries' component={Itineraries}/>
              <Route path='/login' component={Login}/>
              <Route path='/createaccount' component={CreateAccount}/>
            </div>
          </div>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}
export default App;