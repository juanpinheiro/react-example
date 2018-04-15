import React from 'react';
import { Layout, Spin, Row, Col } from 'antd';
import Search from './Search';
import Cities from './Cities';

import style from './style.css';
import logo from '../../assets/img/logo.svg';

const { Header, Content, Footer } = Layout;

const Dashboard = () => (
  <Layout className={style.component}>
    <Spin spinning={false}>
      <Header className="header">
        <h1>
          <img src={logo} alt="Listagem de cidades Logo" />
          <span>Score de Cidades</span>
        </h1>
      </Header>
        <Content className="content">
          <Row type="flex" justify="center">
            <Col span={12}>
              <Search />
              <Cities />
            </Col>
          </Row>
        </Content>
      <Footer className="footer">
        <span>Juan Pinheiro &copy; 2018</span>
      </Footer>
    </Spin>
  </Layout>
);

export default Dashboard;
