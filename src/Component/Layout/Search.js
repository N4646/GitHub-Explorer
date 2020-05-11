import React, { Component } from 'react';

export class Search extends Component 
{
    state = 
    {
      text:''
    };

    onChange = (event) =>
    {
        event.preventDefault();
        console.log({[event.target.name]:event.target.value});
        this.setState({[event.target.name]:event.target.value});
    }

    onSubmit = (event) =>
    {
        event.preventDefault();
        if(this.state.text==='')
        {
            this.props.setAlert("Please Enter Something");
        }
        else
        {  
            console.log(this.state.text)
            this.props.searchUsers(this.state.text,this.props.Static_User);
            this.setState({text:''})
        }
    }

    render() 
    {
        return (
            <div>
                <form className="Form" onSubmit={this.onSubmit}>

                    <input 
                    type="text"
                    name="text"
                    placeholder="Search Your GitHub User Name"
                    value={this.state.text}
                    onChange={this.onChange}
                    />

                    <input
                    type="submit"
                    value="Search"
                    />

                </form>

                {
                    this.props.showClear &&
                    <button className="Clear" onClick={this.props.clearUser}>Clear</button>
                }

            </div>
        )
    }
}