import React from 'react';
import { Layout, Row, Col } from 'antd';

import style from './style.css';

const { Header, Content, Footer } = Layout;

const Dashboard = () => (
  <Layout className={style.component}>
    <Header>
      <h1>Listagem de cidades</h1>
    </Header>
    <Content>
    </Content>
    <Footer>
      Juan Pinheiro &copy; 2018
    </Footer>
  </Layout>
);

export default Dashboard;
