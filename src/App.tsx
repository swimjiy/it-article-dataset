import React from 'react';
import { Button } from 'antd';

import './App.css';
import Table from './Table';

const App: React.FC = () => (
  <div>
    Hello, World!
    <Button type="primary">Button</Button>
    <Table />
  </div>
);
export default App;
