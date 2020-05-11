import React, {Component} from 'react';
import propsTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Navbar extends Component
{
    // Default Props If User Do Not Pass Any Title & Icon Then This Static DefaultProps Will Be call.
    static defaultProps =
    {
        title:" Default Github Explorer",
        icon:"fab fa-github"
    }
    
    // Props Types This Is Define To Give A Types Of Your Props That Your Props Can Not Contain Other Type Of Data That Have Define.
    static propsTypes =
    {
        title:propsTypes.string.isRequired,
        icon:propsTypes.string.isRequired
    }
    render()
    {
        return (
            <div className="Navbar">
                <h3>
                    <i className = 
                    // This (.) Props Is Used When You Are Calling Data From It's Upper Level (Ex App.js)
                    {this.props.icon}>
                    </i>
                    {this.props.title}
                </h3> 

               
                    <ul className="Menu-Link">
                        <li>
                            <Link to="/about">ABOUT</Link>
                        </li>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                    </ul>
               
            </div>
        )
    }
}

export default Navbar