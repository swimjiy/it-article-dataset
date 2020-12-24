import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';

import './App.css';
import TableComponent from '@/Table';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: '#F0F2F5',
  },
  container: {
    paddingTop: theme.spacing(4),
    flex: 1,
  },
  footer: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="h5" gutterBottom>기술 아티클 모음</Typography>
        <Typography variant="body2" paragraph color="textSecondary">내가 읽으려고 만든 기술 아티클 모음</Typography>
        <TableComponent />
      </Container>
      <footer className={classes.footer}>
        <Typography variant="caption" paragraph color="textSecondary">© 2020 Swimjiy</Typography>
        <a href="https://github.com/swimjiy" target="_blank" title="Link to github"><GitHubIcon color="disabled" /></a>
      </footer>
    </div>
  );
};

export default App;
