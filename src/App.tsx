import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import './App.css';
import TableComponent from '@/Table';

const useStyles = makeStyles({
  container: {
    minHeight: '100vh',
    padding: '24px',
    background: '#F0F2F5',
  },
});

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="h4" gutterBottom>기술 아티클 모음</Typography>
        <Typography variant="body2" paragraph>내가 읽으려고 만든 기술 아티클 모음</Typography>
        <TableComponent />
      </Container>
    </>
  );
};

export default App;
