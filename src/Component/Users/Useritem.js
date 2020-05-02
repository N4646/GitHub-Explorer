import React from 'react';

const Useritem = (props) =>
{       
    const {login,avatar_url,html_url} = props.user
        return (
            <div className="Card">
                 <img style={{width:"80px"},{height:"80px"}}src={avatar_url} alt="Profile"></img>
                 <h3 style={{padding:"5px"}}>{login}</h3>
                 <a  style={{padding:"5px"},{backgroundColor:"black"}} href={html_url}>Read More</a>
            </div>
        )
}

export default Useritem