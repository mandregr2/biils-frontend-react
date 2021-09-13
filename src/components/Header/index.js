import { CssBaseline, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <div className={classes.header}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Vacinação para o Covid-19 Homr
        </Typography>
      </div>
    </>
  );
};

export default Header;
