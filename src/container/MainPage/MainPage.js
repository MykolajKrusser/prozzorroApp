import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from './MainPage.css';



export class DoorsConstructor extends Component{

  render(){
    return(
      <div className={classes.MainPage}>
        <h1>MAIN PAGE</h1>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
   
  };
};

export default connect(mapStateToProps)(DoorsConstructor);