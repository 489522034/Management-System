import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import storage from '../../utilities/storage'

export default class Admin extends Component {
    render() {
        const user=storage.getUser();
        if(!user.id){
            return <Redirect to='/login'/>
        }
        return (
            <div>
                admin Hello {user.name}
            </div>
        )
    }
}
