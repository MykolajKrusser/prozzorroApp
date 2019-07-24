import React, {Component}  from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import classes from './ToolBar.css';
import Tools from '../../components/Tools/Tools';
import Logo from '../../components/UI/Logo/Logo';

import * as action from '../../store/actions/index';

class ToolBar extends Component {
  logoutHandler = (event)=>{
    event.preventDefault();
    this.props.onLogout(this.props.token);
  };
  
  render(){
    return (
      <header className={classes.ToolBar}>
        <Logo/>
        <nav>
          <Tools 
            isAuth={this.props.isAuth}
            logout={this.logoutHandler}
          />
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state =>{
  return {
    token: state.auth.token,
    isAuth: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    onLogout: (token)=> dispatch(action.logout(token))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(ToolBar, axios));