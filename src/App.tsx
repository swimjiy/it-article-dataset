import React from 'react';
import { Button, Layout, Typography } from 'antd';

const { Title, Text } = Typography;

import './App.css';
import Table from './Table';

const App: React.FC = () => {
  const { Header, Footer, Content } = Layout;
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Title>기술 아티클 모음</Title>
        <Text type="secondary">내가 읽으려고 만든 기술 아티클 테이블</Text>
        <Button type="primary">Button</Button>
        <Table />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};
export default App;
