import React, { Component } from 'react';
import Useritem from './Useritem';

class User extends Component
{          
    render() 
    {
        return (
            <div className="Grid">
                {
                   this.props.Static_users.map(user =>
                        (
                            <Useritem key={user.id} user={user} />
                        ))
                }
                {
                    this.props.Dynamic_users.map(user =>
                        (
                            <Useritem key={user.id} user={user} />
                        ))
                }
            </div>
        )
    }
}

export default User
