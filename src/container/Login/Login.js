import React, {Component} from 'react';
import {connect} from 'react-redux';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from 'axios';
import classes from './Login.css';

import * as action from '../../store/actions/actionTypes';
import * as actions from '../../store/actions/index';
import { stat } from 'fs';

export class Login extends Component{

  loginHandler = (event)=>{
    event.preventDefault();
    this.props.onLogin(this.props.email, this.props.password);
  };

  render(){
    return(
      <div className={classes.Login}>
        <h1>Log in</h1>
        <p className={classes.Error_message}>{this.props.emailError}</p>
        <input 
          placeholder="Email address" 
          type="email" 
          onChange={this.props.onChangeEmail} 
          value={this.props.email}
        />
        <p className={classes.Error_message}>{this.props.errorPassword}</p>
        <input 
          placeholder="Password" 
          type="password" 
          onChange={this.props.onChangePassword} 
          value={this.props.password}
        />
        <button disabled={this.props.loading} onClick={this.loginHandler}>Login</button>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    email: state.auth.email,
    password: state.auth.password,
    token: state.auth.token,
    loading: state.auth.loading,
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    onChangeEmail: (event)=> dispatch({type: action.AUTH_EMAIL, event: event}),
    onChangePassword: (event)=> dispatch({type: action.AUTH_PASSWORD, event: event}),
    onLogin: (email, password)=> dispatch(actions.auth(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(Login, axios));