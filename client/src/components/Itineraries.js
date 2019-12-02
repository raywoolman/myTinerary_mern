import React, {Component} from 'react'
import {connect} from 'react-redux';
import * as actions from '../store/actions/itinerariesActions';

class Itineraries extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.cityId = this.props.match.params.cityId
  }

  componentDidMount() {
    this.props.fetchItineraries(this.cityId)
  }

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
    fetchItineraries: (cityId) => dispatch(actions.fetchItineraries(cityId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)