import React, { Component } from 'react';
import { getCities } from '../../../actions/index';
import { connect } from 'react-redux';
import { Table } from 'antd';

const columns = [{
  title: 'Estado',
  dataIndex: 'Estado',
  key: 'Estado',
}, {
  title: 'Cidade',
  dataIndex: 'Nome',
  key: 'Nome',
}, {
  key: 'Score',
}];

class Cities extends Component {

  componentDidMount() {
    this.props.dispatch(getCities());
  }

  render() {
    return (
      <div>
        <Table
          columns={columns}
          dataSource={this.props.cities}
          rowKey={(record, index) => index}
          locale={{ emptyText: 'Nenhum dado encontrado' }} />
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
