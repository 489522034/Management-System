import React, { Component } from 'react';

import LoginForm from '../../components/loginForm'

import './login.less';
import logo from './images/logo.png';
import storage from '../../utilities/storage'
import { Redirect } from 'react-router-dom';



export default class Login extends Component {
    render() {
        if(storage.getUser().id){
            return <Redirect to='/'/>
        }
        return (
            <div className="login">
                <div className="login-top">
                    <img className="logo" src={logo}></img>
                    <h1 className="title">苹果管理系统</h1>
                </div>
                <div className="login-body">
                    <h2 className="title2">用户登录</h2>
                    <LoginForm></LoginForm>
                </div>  
            </div>
        )
    }
}
