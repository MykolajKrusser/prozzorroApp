import React, {Component}  from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import classes from './User.css';

import * as action from '../../store/actions/actionTypes';
import * as actions from '../../store/actions/index';

class User extends Component {

  saveHandler = (event)=>{
    event.preventDefault();
    const userEditedData = {
      token: this.props.token,
      name: this.props.name,
      surname: this.props.surname,
      name_customer: this.props.name_customer,
      role: this.props.client_role,
    }
    this.props.onSaveUser(userEditedData);
  };

  render(){
    console.log(this.props.editMode)
    let user = (
      <ul>
        <li>Имя: {this.props.user.name}</li>
        <li>Фамилия: {this.props.user.surname}</li>
        <li>Название заказчика: {this.props.user.name_customer}</li>
        <li>Роль пользователя: {this.props.user.role}</li>
      </ul>
    );

    if(this.props.editMode){
      user = (
        <ul>
          <li>Имя: <input type="text" value={this.props.name} onChange={this.props.onChangeUserName} /></li>
          <li>Фамилия: <input type="text" value={this.props.surname} onChange={this.props.onChangeUserSurname} /></li>
          <li>Название заказчика: <input type="text" value={this.props.name_customer} onChange={this.props.onChangeUserName_customer} /></li>
          <li>Роль пользователя: 
            <div className={classes.Checkbox}>
              <label htmlFor='client_role1'>Поставщик</label>
              <input
                id="client_role1" 
                type="radio" 
                onChange={this.props.onChangeUserClientRole} 
                value={1}
                checked={this.props.client_role === 1}
              />
              <label htmlFor='client_role2'>Заказчик</label>
              <input
                id="client_role2"  
                type="radio" 
                onChange={this.props.onChangeUserClientRole} 
                value={2}
                checked={this.props.client_role === 2}
              />
            </div>
          </li>
        </ul>
      );
    };

    return (
      <div className={classes.User}>
        <h1>Личный кабинет</h1>
        {user}
        <button onClick={this.props.onEditMod}>Изменить данные</button>
        {this.props.editMode ? <button onClick={this.saveHandler}>Сохранить</button> : null}
      </div>
    );
  };
};

const mapStateToProps = state =>{
  return {
    token: state.auth.token,
    user: state.auth.user,
    name: state.user.name,
    surname: state.user.surname,
    name_customer: state.user.name_customer,
    client_role: state.user.role,
    editMode: state.user.editMode
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    onChangeUserName: (event)=> dispatch({type: action.USER_NAME, event: event}),
    onChangeUserSurname: (event)=> dispatch({type: action.USER_SURNAME, event: event}),
    onChangeUserName_customer: (event)=> dispatch({type: action.USER_NAME_CUSTOMER, event: event}),
    onChangeUserClientRole: (event)=> dispatch({type: action.USER_CLIENT_ROLE, event: event}),
    onSaveUser: (userEditedData)=> dispatch(actions.userEdit(userEditedData)),
    onEditMod: ()=> dispatch({type: action.USER_EDIT_MOD}),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(User, axios));