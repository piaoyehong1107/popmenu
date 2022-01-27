import React from "react";
import { withRouter, useHistory } from 'react-router-dom';
import {Button, TextField} from '@material-ui/core';

function New (){
  let history = useHistory();
  const handleSubmit = () => {
    history.push('/');
  }
  const handleInputChange = () => {}

    return (
      <div style={{
        display: 'flex',
      }}>
        <span className={'form-outer'}>
        <h2 style={{marginLeft: '20px'}}> New Menu </h2>
        <form className={'add-menu'} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '780px',
          margin: '0px 300px',
          justifyContent: 'space-evenly'
        }}>
          <TextField
            id="title"
            name="title"
            label="title"
            type="title"
            style={{width: '250px'}}
            // value={}
            autoComplete="current-title"
            variant="outlined"
            onChange={handleInputChange}
          />
          <TextField
            id="description"
            name="description"
            label="description"
            type="description"
            style={{width: '250px'}}
            // value={}
            autoComplete="current-description"
            variant="outlined"
            onChange={handleInputChange}
          />
          <TextField
            id="price"
            name="price"
            label="price"
            type="price"
            style={{width: '250px'}}
            // value={}
            autoComplete="current-price"
            variant="outlined"
            onChange={handleInputChange}
          />
          <TextField
            id="image"
            name="image"
            label="image"
            type="image"
            style={{width: '250px'}}
            // value={}
            autoComplete="current-image"
            variant="outlined"
            onChange={handleInputChange}
          />

          <Button variant="contained" color="primary" onClick={handleSubmit}>Post</Button>
          {/* {this.state.error.length>0 ? 
          <ul style={{color: 'red'}}>{this.state.error.map(mes=><li>{mes}</li>)} </ul> : null
          } */}
        </form>
      </span>
      </div>
    );

}
export default withRouter(New);