import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from 'axios';
import classes from './Registration.css';

import * as action from '../../store/actions/actionTypes';
import * as actions from '../../store/actions/index';

export class Registration extends Component{

  registrationHandler = (event)=>{
    event.preventDefault();
    const registrationData = {
      name: this.props.name,
      surname: this.props.surname,
      name_customer: this.props.name_customer,
      email: this.props.email,
      phone: this.props.phone,
      role: this.props.client_role,
      password: this.props.password,
      password_confirmation: this.props.password_confirmation
    }
    this.props.onRegistration(registrationData);
  };

  render(){

    let messageName = <p className={classes.Error_message}></p>;
    if (this.props.registarionResponse !== null ){
      messageName = <p className={classes.Error_message}>{this.props.registarionResponse.name}</p>
    };
    let messageSurname = <p className={classes.Error_message}></p>;
    if (this.props.registarionResponse !== null ){
      messageSurname = <p className={classes.Error_message}>{this.props.registarionResponse.surname}</p>
    };
    let email = <p className={classes.Error_message}></p>;
    if (this.props.registarionResponse !== null ){
      email = <p className={classes.Error_message}>{this.props.registarionResponse.email}</p>
    };
    let phone = <p className={classes.Error_message}></p>;
    if (this.props.registarionResponse !== null ){
      phone = <p className={classes.Error_message}>{this.props.registarionResponse.phone}</p>
    };
    let client_role = <p className={classes.Error_message}></p>;
    if (this.props.registarionResponse !== null ){
      client_role = <p className={classes.Error_message}>{this.props.registarionResponse.role}</p>
    };
    let password = <p className={classes.Error_message}></p>;
    if (this.props.registarionResponse !== null ){
      password = <p className={classes.Error_message}>{this.props.registarionResponse.password}</p>
    };
    let passwordConfirm = <p className={classes.Error_message}></p>;
    if (this.props.registarionResponse !== null ){
      passwordConfirm = <p className={classes.Error_message}>{this.props.registarionResponse.password}</p>
    };
    
    if (this.props.registarionResponse === "  Пользователь был создан") {
      return <Redirect to='/login' />
    }

    return(
      <div className={classes.Registration}>
        <h1>Регистрация нового пользователя</h1>
        {messageName}
        <input 
          placeholder="Имя" 
          type="text" 
          onChange={this.props.onChangeRegName} 
          value={this.props.name}
        />
        {messageSurname}
        <input 
          placeholder="Фамилия" 
          type="text" 
          onChange={this.props.onChangeRegSurname} 
          value={this.props.surname}
        />
        <input 
          placeholder="Заказчик" 
          type="text" 
          onChange={this.props.onChangeName_customer} 
          value={this.props.name_customer}
        />
        {email}
        <input 
          placeholder="Электронная почта" 
          type="email" 
          onChange={this.props.onChangeRegEmail} 
          value={this.props.email}
        />
        {phone}
        <input 
          placeholder="Телефон" 
          type="text" 
          onChange={this.props.onChangeRegPhone} 
          value={this.props.phone}
        /> 
        {client_role}
        <div className={classes.Checkbox}>
          <label htmlFor='client_role1'>Поставщик</label>
          <input
            id="client_role1" 
            type="radio" 
            onChange={this.props.onChangeRegClientRole} 
            value={1}
            checked={this.props.client_role === 1}
          />
          <label htmlFor='client_role2'>Заказчик</label>
          <input
            id="client_role2"  
            type="radio" 
            onChange={this.props.onChangeRegClientRole} 
            value={2}
            checked={this.props.client_role === 2}
          />
        </div>
        {password}
        <input 
          placeholder="Пороль" 
          type="password" 
          onChange={this.props.onChangeRegPassword} 
          value={this.props.password}
        />
        {passwordConfirm}
        <input 
          placeholder="Подтверждение пароля" 
          type="password" 
          onChange={this.props.onChangeRegConfPassword} 
          value={this.props.password_confirmation}
        />
        <button disabled={this.props.loading} onClick={this.registrationHandler}>Регистрация</button>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    name: state.reg.name,
    surname: state.reg.surname,
    name_customer: state.reg.name_customer,
    email: state.reg.email,
    phone: state.reg.phone,
    client_role: state.reg.client_role,
    password: state.reg.password,
    password_confirmation: state.reg.password_confirmation,
    loading: state.reg.loading,
    registarionResponse: state.reg.registarionResponse
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    onChangeRegName: (event)=> dispatch({type: action.REG_NAME, event: event}),
    onChangeRegSurname: (event)=> dispatch({type: action.REG_SURNAME, event: event}),
    onChangeName_customer: (event)=> dispatch({type: action.REG_NAME_CUSTOMER, event: event}),
    onChangeRegEmail: (event)=> dispatch({type: action.REG_EMAIL, event: event}),
    onChangeRegPhone: (event)=> dispatch({type: action.REG_PHONE, event: event}),
    onChangeRegClientRole: (event)=> dispatch({type: action.REG_CLIENT_ROLE, event: event}),
    onChangeRegPassword: (event)=> dispatch({type: action.REG_PASSWORD, event: event}),
    onChangeRegConfPassword: (event)=> dispatch({type: action.REG_CONF_PASSWORD, event: event}),
    onRegistration: (registrationData)=> dispatch(actions.registration(registrationData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(Registration, axios));