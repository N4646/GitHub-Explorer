import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import none from './Component/Images/Static User/none.png';
import Navbar from './Component/Layout/Navbar';
import Users from './Component/Users/User';
import {Search} from './Component/Layout/Search';
import {Alert} from './Component/Layout/Alert';

class App extends Component 
{
  
  state =
  {
    alert:null,
    Dynamic_User : [],
    Static_User : 
    [
      {
          id:1,
          login:'Static Data',
          avatar_url:none,
          html_url:'www.google.com'
      },
      {
          id:2,
          login:'Static Data',
          avatar_url:none,
          html_url:'www.google.com'
      },
      {
          id:3,
          login:'Static Data',
          avatar_url:none,
          html_url:'www.google.com'
      },
      {
          id:4,
          login:'Static Data',
          avatar_url:none,
          html_url:'www.google.com'
      },
      {
          id:5,
          login:'Static Data',
          avatar_url:none,
          html_url:'www.google.com'
      },
      {
          id:6,
          login:'Static Data',
          avatar_url:none,
          html_url:'www.google.com'
      }
    ]
  };
  
  // componentDidMount()
  // {
  //   axios.get('https://api.github.com/users').then(res=>{this.setState({Dynamic_User: res.data})});
  // }

  searchUsers = (text) =>
  {
    console.log("Enter From App.js " + text)
    axios.get(`https://api.github.com/search/users?q=${text}`).then(res=>{this.setState({Dynamic_User: res.data.items})});
    // axios.get(`https://api.github.com/search/users?q=${text}`).then(res=>{this.setState({Static_User: res.data.items})});
  }

  clearUser = () =>
  {
    this.setState({Static_User:[]});
    this.setState({Dynamic_User:[]});
  }

  setAlert = (message) =>
  {
    this.setState({alert:message});
    setTimeout( () => this.setState({alert:null}),3000)
  }
  
  render()
  {
    return (
      <div className="App">
        
          <Navbar 
            // Title & Icon Are Passed Through Props From App.js To Navbar.js 
            title=" Github Explorer"
            icon="fab fa-github"
          />

          <div className="Container">

            <Alert
            alert={this.state.alert}
            />

            <Search
            searchUsers={this.searchUsers}
            clearUser={this.clearUser}
            showClear={this.state.Dynamic_User.length>0?true:false}
            setAlert={this.setAlert}
            />

            <Users 
            Dynamic_users={this.state.Dynamic_User}
            Static_users={this.state.Static_User}
            />

          </div>

      </div>
    )
  }
}

export default App;