import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions/cityActions';


import 'antd/es/input/style/index.css';
import 'antd/es/select/style/index.css';
import 'antd/es/cascader/style/index.css';
import { Card } from 'antd';

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
            .map(city => 
            <Card key={ city._id } 
              cover={
                <img 
                  src={ city.image }>
                </img> } 
              title={ city.name } 
              extra={ 
                <a href={ city.image }>More
                </a>
            }>
            </Card>)}
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