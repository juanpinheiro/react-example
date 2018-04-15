import React, { Component } from 'react';
import { getCities } from '../../../actions/index';
import { connect } from 'react-redux';
import { Table } from 'antd';
import Score from './Score';

const { Column } = Table;

class Cities extends Component {

  componentDidMount() {
    this.props.dispatch(getCities());
  }

  render() {
    return (
      <div>
        <Table
          dataSource={this.props.cities}
          rowKey={(record, index) => index}
          locale={{ emptyText: 'Nenhum dado encontrado' }}
        >
          <Column
            title="Estado"
            dataIndex="Estado"
            key="Estado"
          />
          <Column
            title="Cidade"
            dataIndex="Nome"
            key="Nome"
          />
          <Column
            title="Action"
            key="action"
            align="right"
            render={(text, record) => (
              <Score city={record.Nome} states={record.Estado}></Score>
            )}
          />
        </Table>
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
