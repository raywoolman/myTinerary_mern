// working here- trying to get fetchCities to work and map JSX elements with fetched data



import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions/cityActions';

class Cities extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

  componentDidMount() {
    this
      .props
      .fetchCities()
  }

  render() {
    return(
      <div>Cities</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {cities: state.cities.cities, isLoading: state.isLoading}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCities: () => dispatch(actions.fetchCities())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)