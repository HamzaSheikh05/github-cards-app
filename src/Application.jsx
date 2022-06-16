import React, { Component } from 'react';
class Card extends React.Component{
    render(){
        return(
            <div className='github-profile' style={{ margin: '1em' }}>
                <img src='https://via.placeholder.com/75' style={{ width: '75px' }}/>
                <div className="info" style={{ display: 'inline-block', marginleft: 10 }}>
                    <div className="name" style={{ fontSize: '125%' }}>Name here...</div>
                    <div className="company">Company here..</div>
                </div>
            </div>
        )
    }
}

class AppShell extends React.Component{

    render(){
        return(
            <div>
                <div className='header'>The Github Cards App</div>
                <Card/>
            </div>
        )
    }
}

export default AppShell;