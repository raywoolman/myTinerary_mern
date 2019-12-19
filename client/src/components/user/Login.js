import React, {Component} from 'react';
import * as actions from '../../store/actions/userActions';
import 'whatwg-fetch';
import {connect} from 'react-redux';
// import {setInStorage, getFromStorage} from '../../utils/storage';
const bcrypt = require('bcryptjs');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      token: '',
      signInError: '',
      signInEmail: '',
      signInPassword: ''
    }
    this.onEmailChange = this
      .onEmailChange
      .bind(this)

    this.onPasswordChange = this
      .onPasswordChange
      .bind(this)

    this.onSignIn = this
        .onSignIn
      .bind(this)
  }

  onEmailChange(e) {
    this.setState({signInEmail: e.target.value})
  }

  onPasswordChange(e) {
    this.setState({signInPassword: e.target.value})
  }

  onSignIn() {
    const {signInEmail, signInPassword} = this.state;
    this.setState({isLoading: true})
    // Post request to backend
    fetch('/api/account/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({email: signInEmail, password: signInPassword})
      })
      .then(res => res.json())
      .then(json => {
        console.log('json', json);
        // if (json.success) {
        //   setInStorage('the_main_app', {token: json.token});
        //   this.setState({signInError: json.message, isLoading: false, signInPassword: '', signInEmail: '', token: json.token});
        // } else {
        //   this.setState({signInError: json.message, isLoading: false});
        // }
      });
  }

  render() {
    return (
       <React.Fragment>
        <button onClick={this.onSignIn}></button>
      </React.Fragment>
    )
  }


}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewUser: (userDetails) => dispatch(actions.addNewUser(userDetails))
  };
}

export default connect(null, mapDispatchToProps(Login))