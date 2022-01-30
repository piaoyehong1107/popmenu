import React, {useState} from "react";
import { withRouter, useHistory } from 'react-router-dom';
import {Button, TextField, Grid} from '@material-ui/core';


function MenuForm({ addMenu }){
  let history = useHistory();
  const [newMenu, setNewMenu] = useState({
    id: -1,
    title: '',
    price: '',
    img: '',
    desc: ''
  })

  const handleInputChange = (e) => {
    setNewMenu({
      ...newMenu,
      [e.target.name]: e.target.value
    })
  }

  return (
      <div style={{width:'56rem'}}>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={6}>
          <TextField
            id="title"
            name="title"
            label="title"
            type="title"
            fullWidth
            // value={}
            autoComplete="current-title"
            variant="outlined"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="description"
            name="description"
            label="description"
            type="description"
            fullWidth
            // value={}
            autoComplete="current-description"
            variant="outlined"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>        
          <TextField
            id="price"
            name="price"
            label="price"
            type="price"
            fullWidth
            // value={}
            autoComplete="current-price"
            variant="outlined"
            onChange={handleInputChange}
          />
          </Grid>
          <Grid item xs={12} sm={6}>      
          <TextField
            id="image"
            name="image"
            label="image"
            fullWidth
            // value={}
            autoComplete="current-image"
            variant="outlined"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>     
          <Button variant="contained" color="primary" onClick={()=>addMenu(newMenu)}>Post</Button>
          {/* {this.state.error.length>0 ? 
          <ul style={{color: 'red'}}>{this.state.error.map(mes=><li>{mes}</li>)} </ul> : null
          } */}
           </Grid>
      </Grid>
      </div>
    );



}
export default withRouter(MenuForm);