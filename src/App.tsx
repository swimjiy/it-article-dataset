import React from 'react';

import './App.css';
import UserCustomTable from '@/components/UserCustomTable';
import { data } from '../public/data.json';

const App: React.FC = () => {
  const config = {
    username: "swimjiy",
    title: "기술 아티클 모음",
    subscription: "내가 읽으려고 만든 기술 아티클 모음",
    columns: ["Title", "Summary", "UpdateAt", "Tags"],
    tags: ["javaScript", "front-end", "IT"],
  }
  return (
    <UserCustomTable config={config} data={data} />
  );
};

export default App;
