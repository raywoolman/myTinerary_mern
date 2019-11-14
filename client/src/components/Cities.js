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
    console.log(this.props.cities)
    return (
      <div>
        {this
            .props
            .cities
            .map(city =><div key={ city._id }>{ city.name }</div>)}
      </div>
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