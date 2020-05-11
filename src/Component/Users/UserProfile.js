import React,{Component} from 'react';

class UserProfile extends Component
{
    componentDidMount()
    {
        this.props.getUsers(this.props.match.params.login);
    }
   
    render()
    {
        const
        {   login ,id,node_id,avatar_url,gravatar_id,url,html_url,followers_url,following_url,gists_url,starred_url,
            subscriptions_url,organizations_url,events_url,received_events_url,type,site_admin,name,company,
            blog,location,email,hireable,bio,public_repos,public_gists,followers,following,created_at,updated_at 
        } = this.props.user;
        return(
            <div className="ProfileImg">
                <img style={{width:"200px"},{height:"220px"}}src={avatar_url} alt="Profile"></img>
                <div className="ProfileBio">
                    <label>Name : {name}</label>
                    <br></br>
                    <label>Username : {login}</label>
                    <br></br>
                    <label>Company Name : {company}</label>
                    <br></br>
                    <label>E-Mail : {email}</label>
                    <br></br>
                    <label>Location : {location}</label>
                    <br></br>
                    <label><a href={html_url}>Visit GitHub Profile</a></label>
                </div>
                <div className="SideProfile">
                    <div className="Label">
                        <label>Follower : {followers}</label>
                        <label>Following : {following}</label>
                        <label>Public Repos : {public_repos}</label>
                        <label>Public Gists: {public_gists}</label>
                    </div>
                    <label>Bio : {bio}</label> 
                </div>
            </div>
        )
    }
}

export default UserProfile