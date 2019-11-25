import React, {Component} from 'react'
import {connect} from 'react-redux';
import * as actions from '../store/actions/itineraryActions';

class Itineraries extends Component {
  render() {
    return (
      <div>Itineraries</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {itineraries: state.itineraries.itineraries, isLoading: state.isLoading}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchItineraries: () => dispatch(actions.fetchItineraries())
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)