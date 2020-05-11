import React, { Component, Fragment } from 'react';
import './App.css';
import axios from 'axios';
import none from './Component/Images/Static User/none.png';
import Navbar from './Component/Layout/Navbar';
import Users from './Component/Users/User';
import UserProfile from './Component/Users/UserProfile';
import {Search} from './Component/Layout/Search';
import {Alert} from './Component/Layout/Alert';
import {About} from './Component/Pages/About';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

class App extends Component 
{
  
  state =
  {
    username:{},
    text:'',
    alert:null,
    Dynamic_User : [],
    static_user : [],
    Static_User : 
    [
      {
          id:1,
          login:'N4646',
          avatar_url:none,
          html_url:'www.google.com'
      },
      {
          id:2,
          login:'Nikhil',
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

  searchUsers = (text,Static_User) =>
  {
    console.log("Enter From App.js " + text);
    this.setState({text:text});
    this.setState({static_user:Static_User});
    console.log("Enter From App.js Static User" + Static_User);;
    axios.get(`https://api.github.com/search/users?q=${text}`).then(res=>{this.setState({Dynamic_User: res.data.items})});
  }

  getUsers = (username) =>
  {
    axios.get(`https://api.github.com/users/${username}`).then(res=>{this.setState({username: res.data})});
  }

  clearUser = () =>
  {
    this.setState({static_user:[]});
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

        <Router>

          <Navbar 
            // Title & Icon Are Passed Through Props From App.js To Navbar.js 
            title=" Github Explorer"
            icon="fab fa-github"
          />
     
          <Switch>

            <Route exact path="/" render = {
              props=>(
              
              <div className="Container">
                <Alert
                alert={this.state.alert}
                />

                <Search
                searchUsers={this.searchUsers}
                clearUser={this.clearUser}
                showClear={this.state.Dynamic_User.length>0?true:false || this.state.static_user.length>0?true:false }
                setAlert={this.setAlert}
                Static_User={this.state.Static_User}
                />

                <Users 
                Dynamic_users={this.state.Dynamic_User}
                Static_users={this.state.static_user}
                Text={this.state.text}
                />

              </div>
            )}/>

                <Route exact path="/about" component={About} />

                <Route exact path="/userprofile/:login" render = {
                  props => (<UserProfile 
                            {...props}getUsers={this.getUsers} 
                            user={this.state.username}
                            />)
                }/>

          </Switch>

        </Router>

      </div>
    )
  }
}

export default App;