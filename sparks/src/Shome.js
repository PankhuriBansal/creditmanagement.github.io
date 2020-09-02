import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//import credit from './public/credit.jpg';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: ("/credit.jpg"),
    backgroundRepeat: 'no-repeat',
    backgroundColor:
    theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class Home extends React.Component {
    constructor()
    {
      super();
      this.state={
      }
    }
    render (){
  const classes = this.props;
  return (
    <div>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <center>
      {/* <div  style={{
      backgroundImage:
        "url('credit.jpg')"
    }}> */}
       <center> <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            CREDIT TRANSFER
            <p>Helps me to transfer credit among my various friends according to my needs and their services </p>
          </Typography>
        </div>
        </center>
      </center>
    </Grid>
    </div>
  );
}
}
export default Home;