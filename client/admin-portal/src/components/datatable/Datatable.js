import React, { useState,useEffect } from 'react'
import "./datatable.css";

import { DataGrid } from "@mui/x-data-grid";
//import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField"
import List from "@mui/material/List"
import axios from 'axios';

const Datatable = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{
    loadUsers();
  },
  []
  );

  const loadUsers = async () =>{
    const result = await axios.get('http://localhost/api2/viewclient.php')
    setData(result.data.rrecod);
    console.log(result.data)
  }

  const handleDelete = (id) => {
    axios.delete('http://localhost/api2/deleteclient.php',{ data: {id: id}})
    .then((result)=>{
      loadUsers();
    }).catch(()=>{
      // alart('unable to delete try again')
    })
    setData(data.filter((item) => item.id !== id));

  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        List of Users
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      

      {data && data.map((data, index) => (
      <List>
      <DataGrid
        className="datagrid"
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        key={index}
      >
        <TextField>{index + 1}</TextField>
        <TextField className='col-md-2'>{data.Username}</TextField>
        <TextField className='col-md-2'>{data.Email}</TextField>
        <TextField className='col-md-2'>{data.Country}</TextField>
        <TextField className='col-md-2'>{data.City}</TextField>
        <TextField className='col-md-2'>{data.Phone}</TextField>
      </DataGrid>
      </List>
      ))}
    </div>
  )
}

/* 
        <TextField className='col-md-2'>{index}</TextField>
        <TextField className='col-md-2'>{data.Username}</TextField>
        <TextField className='col-md-2'>{data.Email}</TextField>
        <TextField className='col-md-2'>{data.Country}</TextField>
        <TextField className='col-md-2'>{data.City}</TextField>
        <TextField className='col-md-2'>{data.Phone}</TextField>
*/

export default Datatable