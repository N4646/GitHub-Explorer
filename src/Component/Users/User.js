import React, { Component } from 'react';
import Useritem from './Useritem';

class User extends Component
{          
    render() 
    {
        return (
            <div className="Grid">
                {
                     console.log(this.props.Text+" Text From User Component")
                }
                {
                     console.log(this.props.Static_users.login)
                }
                {
                    this.props.Static_users.filter(name => name.login.toLowerCase().includes(this.props.Text.toLowerCase())).map(user =>
                        (
                            <Useritem key={user.id} user={user} />
                        ))
                }
                {
                    this.props.Dynamic_users.filter(name => name.login.toLowerCase().includes(this.props.Text.toLowerCase())).map(user =>
                        (
                            <Useritem key={user.id} user={user} />
                        ))
                }
            </div>
        )
    }
}

export default User
