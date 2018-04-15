import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchCities, getCitiesStates } from '../../../actions/index';

import { Form, Input, Button, Select } from 'antd';

import style from './style.css';

const FormItem = Form.Item;
const Option = Select.Option;

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      state: '',
    };
  }

  componentDidMount() {
    this.props.dispatch(getCitiesStates());
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(searchCities(this.state));
  }

  render() {
    return (
      <div className={style.component}>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <FormItem>
            <Input
              type="text"
              name="city"
              placeholder="Cidade"
              className="field"
              size="large"
              onChange={(e) => this.setState({ city: e.target.value.toLowerCase() })}
              />
          </FormItem>
          <FormItem>
          <Select
            name="state"
            placeholder="Estado"
            className="field"
            size="large"
            onChange={(value) => this.setState({ state: value.toLowerCase() })}

            showSearch
            optionFilterProp="children"
            notFoundContent="Estado não encontrado"
            filterOption={(input, option) => (
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            )}
          >
            {this.props.states.map((value, index) => (
              <Option key={index} value={value}>{value}</Option>
            ))}
          </Select>
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" icon="search" size="large">
              Buscar
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      states: state.states
  };
};


export default connect(mapStateToProps)(Search);
