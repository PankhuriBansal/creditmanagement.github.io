import React from 'react';
import Button from '@material-ui/core/Button';
import Axios from 'axios';
import { Typography,  Box,  } from '@material-ui/core'; 

class Muser extends React.Component{ 
   constructor()
    {
    super()
      this.state={
      kalu :[]
      }
    }  
    componentDidMount(){
      Axios.get('http://localhost:8080/examples/muser.jsp').then(response=>{
        this.setState({kalu: response.data.kalu})  
      }).catch(err => {
          console.log("Failed");
      })
    }
render(){
    return (      
<div>
  <center>
{this.state.kalu.map((item)=>(
       <Box display="block" width='25%'
            height='190px' borderRadius="5%"  >
                <Typography variant="h6" component="h6" align="center">
               <div>NAME : {item.name}</div>
                </Typography>
                <Typography variant="h6" component="h6" align="center">
               <div>EMAIL : {item.email}</div>
                </Typography>
                <Typography variant="h6" component="h6" align="center">
               <div>POINTS: {item.points}</div>
                </Typography>
                <Typography variant="h6" component="h6" align="center">
               <div>ADDRESS: {item.address}</div>
                </Typography>
            </Box>         
))}
</center>
    </div>
    );
    }
}
export default Muser;
