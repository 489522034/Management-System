import React, { Component } from 'react';
import './loginForm.less';
import './data/data1';
import Axios from 'axios';

export default class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state={
            accountState:false,
            passwordState:false,
        }
    }
    accountSet=()=>{
        let account=document.getElementById('account');
        let check=/^[a-zA-Z0-9]{6,16}$/;
        this.setState({
            accountState:check.test(account.value)
        },()=>{
            console.log(this.state.accountState);
        })
    }
    passwordSet=()=>{
        let password=this.refs.password;
        let check=/^[a-zA-Z0-9]{6,16}$/;
        this.setState({
            passwordState:check.test(password.value)
        },()=>{
            console.log(this.state.passwordState);
        })
    }
    submit=()=>{
        let account=document.getElementById('account');
        let password=document.getElementById('password');
        if(this.state.accountState&this.state.passwordState){
            Axios.get(
                'http://api.com',
                {dataType:'json'}
            )
            .then(res=>{
                if(res.data.loginInfo==1){
                    console.log('成功');
                }else{
                    console.log('账户密码不对');
                }
            })
            .catch((error)=>{
                console.log(error);
            })
        }else{
            console.log("账户密码格式不对");
        }
    }
    render() {
        return (
            <div className='box'>
                <input className='account' ref='account' id='account' placeholder='请输入账号' onChange={this.accountSet}/>
                <input className='password' ref='password' id='password' placeholder='请输入密码' onChange={this.passwordSet} />
                <button className='submit' id='submit' onClick={this.submit}>登录</button>
            </div>
        )
    }
}
