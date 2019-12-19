import React, {Component} from 'react';
import {connect} from 'react-redux';


class Cities extends Component {

    constructor(props) {
      super(props);
      this.state = {
          inputField: ''
      }
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (e) => {

    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  
    render() {
      return (
          <React.Fragment>
          <input name="inputField" onChange={this.handleChange} type="text"/>
          <button onClick={this.handleClick}></button>
          </React.Fragment>
      )
    }

  }