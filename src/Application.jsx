import React, { Component } from 'react';
import axios from 'axios';

const CardList = (props) => {
    return(
        <div>
            {props.profiles.map(profile => <Card {...profile}/>)}
        </div>
    )
};

class Form extends React.Component{
    state = {userName: ''}
    handleSubmit = async(event) => {
        event.preventDefault();
        const resp = await 
        axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                placeholder='Github username'
                value={this.state.userName} 
                ref={this.userNameInput}
                onChange={event => this.setState({userName: event.target.value})} 
                required/>
                <button>Add Card</button>
            </form>
        )
    }
}

class Card extends React.Component{
    render(){
        const profile = this.props;
        return(
            <div className='github-profile' style={{ margin: '1em' }}>
                <img src={profile.avatar_url} style={{ width: '75px' }}/>
                <div className="info" style={{ display: 'inline-block', marginleft: 10 }}>
                    <div className="name" style={{ fontSize: '125%' }}>{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        )
    }
}

class AppShell extends React.Component{
    state = {
        profiles: [],
    }
    addNewProfile = (profileData) => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData],
        }))
    }
    render(){
        return(
            <div>
                <div className='header'>The Github Cards App</div>
                <Form onSubmit={this.addNewProfile}/>
                <CardList profiles={this.state.profiles}/>
            </div>
        )
    }
}

export default AppShell;