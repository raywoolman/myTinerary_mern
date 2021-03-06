import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "./style/main.css";

import { loadUser } from "./store/actions/authActions";

//routes:
import Home from "./components/Home";
import Cities from "./components/Cities";
import Itineraries from "./components/Itineraries";
import CreateAccount from "./components/auth/CreateAccount";
import Login from "./components/auth/Login";
import NavBar from "./components/layout/NavBar";

class App extends Component {
  
  componentDidMount() {
    this.props.loadUser();
  }
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <div className="viewport">
              <Route exact path="/" component={Home} />
              <Route path="/cities" className="viewport" component={Cities} />
              <Route path="/itineraries/:cityId" component={Itineraries} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={CreateAccount} />
            </div>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => dispatch(loadUser())
  };
};

export default connect(null, mapDispatchToProps)(App);
