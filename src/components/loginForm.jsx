import React, { Component } from 'react';
import './loginForm.less';
import './data/data1';
import Axios from 'axios';
import axios from '../api/ajax.js'
import storage from '../utilities/storage'

export default class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state={
            accountState:false,
            passwordState:false,
        }
    }
    //验证账户是否格式正确
    accountSet=()=>{
        let account=document.getElementById('account');
        let check=/^[a-zA-Z0-9]{6,16}$/;
        this.setState({
            accountState:check.test(account.value)
        },()=>{
            // console.log(this.state.accountState);
        })
    }
    //验证密码是否格式正确
    passwordSet=()=>{
        let password=this.refs.password;
        let check=/^[a-zA-Z0-9]{6,16}$/;
        this.setState({
            passwordState:check.test(password.value)
        },()=>{
            // console.log(this.state.passwordState);
        })
    }
    //提交
    submit=()=>{
        let account=document.getElementById('account');
        let password=document.getElementById('password');
        if(this.state.accountState&this.state.passwordState){
            //用async和await简化
            // (async function(){
            //     try{
            //         let response=await axios("/login",{account:'11',password:'22'},'POST');
            //         if(response.data.loginInfo==1){
            //             console.log('登录成功');
            //         }else{
            //             console.log('账户密码不对');
            //         }
            //     }catch(error){
            //         console.log("请求失败",error);
            //     }
            // }());
            //ajax请求验证账户密码是否正确
            axios("/login",{account:'11',password:'22'},'POST').then(response=>{
                if(response.data.loginInfo==1){
                    console.log('登录成功');
                    let user=response.data.user;
                    storage.addUser(user);
                    window.location.href="/";
                }else{
                    console.log('账户密码不对');
                }
            }).catch(error=>{
                console.log("读取失败",error);
            });
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
