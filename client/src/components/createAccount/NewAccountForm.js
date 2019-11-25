import React, {Component} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {connect} from 'react-redux';

import '../../style/main.css'

const formStyle = {
    'textAlign': 'left'
}

const buttonStyle = {
  'width': '100%',
  'bottom': '0px'
}

class CreateAccountForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      confirmPassword: ''
    }
  }

  render() {
    return (
      <div>
      <Form style={formStyle}>
      <div>

      <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="name"
            name="name"
            id="name"/>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"/>
        </FormGroup>
        <br/>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"/>
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input
            type="confirmPassword"
            name="confirmPassword"
            id="confirmPassword"/>
        </FormGroup>
        <br/>
        </div>
        <Button style={buttonStyle}>Submit</Button>
      </Form>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {}
// }

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(null, mapDispatchToProps)(CreateAccountForm)