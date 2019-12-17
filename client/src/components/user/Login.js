import React, {Component} from 'react';
import 'whatwg-fetch';
const bcrypt = require('bcrypt');

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
  }

  onEmailChange(e) {
    this.setState({signInEmail: e.target.value})
  }

  onPasswordChange(e) {
    this.setState({signInPassword: e.target.value})
  }

  
}