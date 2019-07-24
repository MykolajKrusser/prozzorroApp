import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './Tools.css';

const tools = (props)=>(
  <div className={classes.ToolsItems}>
     {props.isAuth ? <button onClick={props.logout}>Выйти</button> : null}
    {!props.isAuth ? <NavLink to='/login' >Вход</NavLink> : null}
    {props.isAuth ? <NavLink to='/user' >Личный кабинет</NavLink> : null}
    <NavLink to='/' exact>Главная</NavLink>
  </div>
);

export default tools;