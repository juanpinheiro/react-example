import React, { Component } from 'react';
import { getCities } from '../../../actions/index';
import { connect } from 'react-redux';

class Cities extends Component {

  componentDidMount() {
    this.props.dispatch(getCities());
  }

  render() {
    return (
      <div>
        {this.props.cities.map((item, index) => {
          return (
            <span key={index}>{item.Nome}</span>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      cities: state.cities.filter
  };
};

export default connect(mapStateToProps)(Cities);
