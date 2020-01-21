import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { connect } from "react-redux";
// import * as actions from "../../store/actions/userActions";
import {register} from "../../store/actions/authActions";
import { clearErrors } from '../../store/actions/errorActions';
import PropTypes from "prop-types";

import "../../style/main.css";

const formStyle = {
  textAlign: "left"
};

const buttonStyle = {
  width: "100%",
  bottom: "0px"
};

class CreateAccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
      msg: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired
    // clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    //if current state.error is different to old state.error (there's been a change)
    if (error !== prevProps.error) {
      //check for register error
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const { name, email, password, confirmPassword } = this.state;

    const newUser = { name, email, password, confirmPassword }

    this.props.register(newUser)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        {this.props.error.isError ? <Alert color="danger">{this.props.error.msg}</Alert> : null}
        <Form style={formStyle} onSubmit={this.handleSubmit}>
          <div>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="text"
                name="email"
                id="email"
                onChange={this.handleChange}
              />
            </FormGroup>
            <br />
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword">Confirm Password</Label>
              <Input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                onChange={this.handleChange}
              />
            </FormGroup>
            <br />
          </div>
          <Button style={buttonStyle} type={"submit"}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userDetails: state.users.userDetails,
    isRegistered: state.users.isRegistered,
    isLoading: state.users.isLoading,
    isError: state.users.isError,
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // addNewUser: userDetails => dispatch(actions.addNewUser(userDetails)),
    register: newUser => dispatch(register(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAccountForm);
