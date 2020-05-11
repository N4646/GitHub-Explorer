import React from 'react';
import {Link} from "react-router-dom";

const Useritem = (props) =>
{       
    const {login,avatar_url} = props.user
        return (
            <div className="Card">
                 <img style={{width:"80px"},{height:"80px"}}src={avatar_url} alt="Profile"></img>                        <br></br>
<br></br>        <h3 style={{padding:"5px"},{color:"#150F19"}}>{login}</h3>                                              <br></br>
                 <Link to={`/userProfile/${login}`} style={{padding:"5px"},{backgroundColor:"#A593C7"}}>Read More</Link> <br></br>
            </div>
        )
}

export default Useritem