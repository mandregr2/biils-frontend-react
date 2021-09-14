import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Menu from './menu';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Bills
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    
    
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function Welcome() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Menu>
        </Menu>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Bills
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Controle seus gastos.'}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Divida os custos familiares organizadamente.'}
        </Typography>
        <Typography variant="body1">Uma nova maneira de controlar gastos e investimentos.</Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body2">Desenvolvido por Mário André Rodriguez.</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}