import React from "react"
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

import "./navbar.css"

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    if(true) {
     navigate("/login");
   }
 };

 const handleHome = () => {
  if(true) {
   navigate("/");
 }
};
const Logout = ()=>{
  localStorage.removeItem('auth');
  localStorage.clear();
  navigate("/login");
}

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Hotel booking</span>
        <div className="navItems">
            <Button 
              variant="contained"
              sx={{ mt: 3, mb: 2, mr: 2 }}
              onClick={handleClick}>Login</Button><Button 
              variant="contained"
              sx={{ mt: 3, mb: 2, mr: 2 }}
              onClick={Logout}>Logout</Button>
            <Button 
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleHome}>Home</Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar