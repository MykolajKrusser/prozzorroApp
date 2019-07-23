import React, {Component} from 'react';
import {connect} from 'react-redux';
import Wrap from '../../hoc/Wrap/Wrap';
import classes from './Layout.css';
import Toolbar from '../ToolBar/ToolBar';

class Layout extends Component {

  render(){
    return (
      <Wrap>
        <Toolbar/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
    </Wrap>
    );
  };
};

const mapStateToProps = state =>{
  return {
    
  }
}
export default connect(mapStateToProps)(Layout);