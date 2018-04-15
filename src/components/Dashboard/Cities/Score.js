import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCityScore } from '../../../actions/index';

import { Modal, Button } from 'antd';

class Score extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    }
  }

  handleClick() {
    this.setState({ loading: true });

    this.props.dispatch(getCityScore({
      city: this.props.city,
      state: this.props.states,
    }));

    setTimeout(() => this.displayScore(), 300);
  }

  displayScore() {
    Modal.info({
      title: 'Pontuação',
      content: `A pontuação da cidade de ${this.props.city} é ${this.props.score}`,
      onOk() {},
    });
    this.setState({ loading: false });
  };

  render() {
    return (
      <Button
        type="default"
        htmlType="submit"
        icon="star"
        onClick={this.handleClick.bind(this)}
        loading={this.state.loading}>
        Ver Pontuação
      </Button>
    );
  }
}

const mapStateToProps = state => {
  return {
      score: state.score
  };
};

export default connect(mapStateToProps)(Score);
