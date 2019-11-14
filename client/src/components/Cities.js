import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions/cityActions';
import '../style/cities.css'

import {
  Card, CardImg, CardSubtitle
} from 'reactstrap';

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
      this.props.cities.map(city=> (
      <Card key={ city._id } body inverse>
        <CardSubtitle style={ {color: 'black'}}>{ city.name }</CardSubtitle>
        <CardImg className="card-img" src={ city.image }></CardImg>
      </Card>
    )
    ))
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
