import React, {Component} from 'react'
import {connect} from 'react-redux';

import NewAccountForm from './NewAccountForm'

import '../../style/main.css'

//funtional

class CreateAccount extends Component {

  render() {
    return (
      <div className='viewport'>
        <p>Join the community</p>
        <br/>
          <NewAccountForm />
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

export default connect(null, mapDispatchToProps)(CreateAccount)