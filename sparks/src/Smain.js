import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles , } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Shome from './Shome';
import Muser from './Muser';
import Ctrans from './Ctrans';
import Htrans from './Htrans';

const useStyles = ((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

class Demo extends Component {
 constructor(){
  super();
  this.state={
      value: 1,
  }
 }
  //const classes = useStyles();
  //const [value, setValue] = React.useState('1');
  handleChange = (e,newValue) =>{
    this.setState( {value: newValue});
  //const handleChange = (event, newValue) => {
  //setValue(newValue);
  };
render(){
  const{classes} =this.props;
  return (
    <div className={classes.root}>
      <TabContext value={this.state.value}>
        <AppBar position="static">
          <TabList onChange={this.handleChange} aria-label="simple tabs example">
            <Tab label="Home " value="1"  />
            <Tab label="My users" value="2"/>  
            <Tab label="Transfer Credit" value="3"  />
            <Tab label="Transfer History" value="4"  />        
          </TabList>
        </AppBar>
        <TabPanel value="1"  >
       <Shome/>     
        </TabPanel>        
        <TabPanel value="2" >
       <Muser/>
        </TabPanel>
        <TabPanel value="3" >
       <Ctrans/>
        </TabPanel>
        <TabPanel value="4" >
       <Htrans/>
        </TabPanel>
        </TabContext>
        </div>
  );
}
}
export default withStyles(useStyles)(Demo);

