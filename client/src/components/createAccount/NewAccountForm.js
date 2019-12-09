import React, {Component} from 'react'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/userActions';

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
    this.handleSubmit = this
      .handleSubmit
      .bind(this)
    this.handleChange = this
      .handleChange
      .bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this
      .props
      .addNewUser(this.state)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    console.log("rerender")
    return (
      <div>
        <Form style={formStyle} onSubmit={this.handleSubmit}>
          <div>

            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="text" name="email" id="email" onChange={this.handleChange}/>
            </FormGroup>
            <br/>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword">Confirm Password</Label>
              <Input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                onChange={this.handleChange}/>
            </FormGroup>
            <br/>
          </div>
          <Button style={buttonStyle} type={"submit"}>Submit</Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {userDetails: state.users.userDetails};
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewUser: (userDetails) => dispatch(actions.addNewUser(userDetails))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountForm)