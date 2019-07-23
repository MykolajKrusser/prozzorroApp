import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './Tools.css';

const tools = (props)=>(
  <div className={classes.ToolsItems}>
    <NavLink to='/'>Главная</NavLink>
    <NavLink to='/login' >Вход</NavLink>
    <button onClick={props.logout}>Выйти</button>
  </div>
);

export default tools;