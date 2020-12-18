import React from 'react';
import { Button, Typography } from 'antd';

const { Title, Text } = Typography;

import './App.css';
import Table from './Table';

const App: React.FC = () => (
  <div>
    <Title>기술 아티클 모음</Title>
    <Text type="secondary">내가 읽으려고 만든 기술 아티클 테이블</Text>
    <Button type="primary">Button</Button>
    <Table />
  </div>
);
export default App;
