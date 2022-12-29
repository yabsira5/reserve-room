import React, { useState} from 'react'
import "./new.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import axios from 'axios';

const New = () => {
  const navigate = useNavigate();
  const [data, setdata]=useState({ 
  FirstName:"",
  LastName:"",
  Email:"",
  Password:""
})

const {FirstName,LastName,Email,Password} = data;

const handleChange=(e)=>{
  setdata({ ...data,[e.target.name]: e.target.value});
}

const submitForm= async (e)=>{
  e.preventDefault();
  console.log(data)

 await axios.post('http://localhost/api2/registeremp.php',data)


.then((result)=>{
  console.log(result.data)
  if(result.status === 200) {
    navigate('/users');
  }
  else {
    alert('There is a problem adding,please try again');
  }
})

}
    //u,e,coun,city,phon,pass

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add here</h1>
        </div>
        <div className="bottom">

              <Box
                sx={{
                  marginTop: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
        >
        
          <Box component="form" noValidate onSubmit={e => submitForm(e)} sx={{ mt: 1 }}>
          <Grid container spacing={2}>

          <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="FirstName"
                  name="FirstName"
                  required
                  fullWidth
                  id="FirstName"
                  label="FirstName"
                  autoFocus
                  onChange={handleChange} value={data.FirstName}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="LastName"
                  name="LastName"
                  required
                  fullWidth
                  id="LastName"
                  label="LastName"
                  autoFocus
                  onChange={e => handleChange(e)} value={data.LastName}
                />
              </Grid>

            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                id="Email"
                label="Email"
                name="Email"
                autoComplete="Email"
                autoFocus
                onChange={e => handleChange(e)} value={data.Email}
              />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="Password"
                  label="Password"
                  type="Password"
                  id="Password"
                  onChange={e => handleChange(e)} value={data.Password}
                />
              </Grid>

              

            {/* Sign In Button*/}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send
            </Button>
            </Grid>
          </Box>
          </Box>
            
          </div>
        </div>
      </div>
  
  )
}

export default New