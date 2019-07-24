import React, { Component } from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Layout from './container/Layout/Layout';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Registration from './container/Registration/Registration';
import ProgressBar from './components/UI/ProgressBar/ProgressBar';

const asyncLogin = asyncComponent(()=>{
  return import ('./container/Login/Login')
});

const asyncMainPage = asyncComponent(()=>{
  return import ('./container/MainPage/MainPage')
});

const asyncUser = asyncComponent(()=>{
  return import ('./container/User/User')
});

class App extends Component {
  render() {
    let progressBar;
    let routes = (
      <Switch>
        <Route path='/login' component={asyncLogin}/>
        <Route path='/' exact component={Registration}/>
        <Redirect to='/'/>
      </Switch>
    );
    
    if (this.props.isAuthenticated){
      routes = (
        <Switch>
          <Route path='/user' component={asyncUser}/>
          <Route path='/' exact component={asyncMainPage}/>
          <Redirect to='/'/>
        </Switch>
      );
    };

    if(this.props.loadingReg){
      progressBar = <ProgressBar/>
    };
    if(this.props.loadingAuth){
      progressBar = <ProgressBar/>
    };
    if(this.props.loadingUserEdit){
      progressBar = <ProgressBar/>
    };

    return (
      <div>
        <Layout>
            {progressBar}
            {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    loadingReg: state.reg.loading,
    loadingAuth: state.auth.loading,
    loadingUserEdit: state.user.loading,
    token: state.auth.token,
    registarionResponse: state.reg.registarionResponse,
    isAuthenticated: state.auth.token != null
  };
};

const mapDispatchToProps = dispatch=>{
  return{
    
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));