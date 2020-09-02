import React from 'react';
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
      Axios.get('http://localhost:8080/examples/htrans.jsp').then(response=>{
        this.setState({kalu: response.data.kalu})  
      }).catch(err => {
          console.log("Failed");
      })
    }
render(){
    return (
      <center>      
<div  style={{
      backgroundImage:
      "url('image.jpg')"
    }}>
{this.state.kalu.map((item)=>(
            <Box display="block" width='25%' 
            height='140px' borderRadius="20%">
                <Typography variant="h6" component="h6" align="center" color ="secondary">
               <div>FROM : {item.send}</div>
                </Typography>
                <Typography variant="h6" component="h6" align="center">
               <div>TO : {item.recieve}</div>
                </Typography>
                <Typography variant="h6" component="h6" align="center">
               <div>Points Shared: {item.amount}</div>
                </Typography>
            </Box>         
))}
    </div>
    </center>
    );
    }
}
export default Muser;