import React from "react";
import { withRouter } from 'react-router-dom';
import {Button, TextField} from '@material-ui/core';

function New (){
    return (
      <div style={{
        display: 'flex',
      }}>
        <span className={'form-outer'}>
        <h2 style={{marginLeft: '20px'}}> Sign Up </h2>
        <form className={'add-menu'} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '780px',
          margin: '0px 300px',
          justifyContent: 'space-evenly'
        }}>
          <TextField
            id="username"
            name="username"
            label="Username"
            type="username"
            style={{width: '250px'}}
            // value={}
            autoComplete="current-username"
            variant="outlined"
            // onChange={this.handleInputChange}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            style={{width: '250px'}}
            // value={}
            autoComplete="current-password"
            variant="outlined"
            onChange={this.handleInputChange}
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            type="mail"
            style={{width: '250px'}}
            // value={}
            autoComplete="current-email"
            variant="outlined"
            onChange={this.handleInputChange}
          />
          <div style={{marginTop: '20px', fontSize: '20px', color: 'grey'}}>Choose your avartar</div>
          {/* <ImageSelection onPick={this.onPick}/> */}
          <Button variant="contained" color="primary" onClick={this.handleSubmit}>Submit</Button>
          {this.state.error.length>0 ? 
          <ul style={{color: 'red'}}>{this.state.error.map(mes=><li>{mes}</li>)} </ul> : null
          }
        </form>
      </span>
      </div>
    );

}
export default withRouter(New);