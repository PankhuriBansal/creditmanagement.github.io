import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles , } from '@material-ui/core/styles';
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

class Class extends Component {
  constructor()
     {
         super();
         this.state ={
           t1: "",
           t2:"",
           t3:"",
           classdata:[]
       }
     }
     fun(e){
       this.setState({
           [e.target.name]:e.target.value
       })   
   }
   sendData(ev){
    const t1=this.state.t1
    const t2=this.state.t2
    const t3=this.state.t3
    const data={
        t1,t2,t3
    }
       Axios.get('http://localhost:8080/examples/trans.jsp',{params:data}).then(response=>{
           console.log(response);
           this.setState({
               classdata:response.data.classdata
           })
       }).catch(err=>{
           console.log("Failed");
       })
       Axios.get('http://localhost:8080/examples/transfer.jsp',{params:data}).then(response=>{
           console.log(response);
           this.setState({
               classdata:response.data.classdata
           })
       }).catch(err=>{
           console.log("Failed");
       })
      }
  render()
      {
        const{classes} =this.props;
  return (
    <div  style={{
      backgroundImage:
        "url('credit.jpg)"
    }}>
  <center>  <div>
   <p> <FormControl className={classes.formControl}>
  <InputLabel htmlFor="grouped-select">From</InputLabel>
        <Select defaultValue="" id="grouped-select" name="t1" autoComplete="name" value={this.state.t1} fullWidth autoFocus onChange={this.fun.bind(this)}>
        <MenuItem value="" >
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Avi"}>Avi</MenuItem>
          <MenuItem value={"Sreya"}>Sreya</MenuItem>
          <MenuItem value={"Krishna"}>Krishna</MenuItem>
          <MenuItem value={"Anjali"}>Anjali</MenuItem>
          <MenuItem value={"Shivanshu"}>Shivanshu</MenuItem>
          <MenuItem value={"Prateek"}>Prateek</MenuItem>
          <MenuItem value={"Manu"}>Manu</MenuItem>
          <MenuItem value={"Somya"}>Somya</MenuItem>
          <MenuItem value={"Ayushi"}>Ayushi</MenuItem>
          <MenuItem value={"Abhishek"}>Abhishek</MenuItem>
          <MenuItem value={"Ayush"}>Ayush</MenuItem>
        </Select>
      </FormControl></p>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">To</InputLabel>
        <Select defaultValue="" id="grouped-select" name="t2" autoComplete="name" value={this.state.t2} fullwidth autoFocus onChange={this.fun.bind(this)}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Avi"}>Avi</MenuItem>
          <MenuItem value={"Sreya"}>Sreya</MenuItem>
          <MenuItem value={"Krishna"}>Krishna</MenuItem>
          <MenuItem value={"Anjali"}>Anjali</MenuItem>
          <MenuItem value={"Shivanshu"}>Shivanshu</MenuItem>
          <MenuItem value={"Prateek"}>Prateek</MenuItem>
          <MenuItem value={"Manu"}>Manu</MenuItem>
          <MenuItem value={"Somya"}>Somya</MenuItem>
          <MenuItem value={"Ayushi"}>Ayushi</MenuItem>
          <MenuItem value={"Abhishek"}>Abhishek</MenuItem>
          <MenuItem value={"Ayush"}>Ayush</MenuItem>
        </Select>
      </FormControl>
      <p><TextField
                label="Amount"
                autoWidth
                name="t3" autoComplete="name" value={this.state.t3} autoFocus onChange={this.fun.bind(this)}/>
            </p>             <p>
          <Button  variant="contained" color="secondary" autoWidth onClick={this.sendData.bind(this)}> Transfer </Button></p>
    </div></center>
    </div>
  );
}
}

export default withStyles(useStyles)(Class);
