import React, { Component } from 'react';

const testData = [
    {
        "login": "gaearon",
        "id": 810438,
        "node_id": "MDQ6VXNlcjgxMDQzOA==",
        "avatar_url": "https://avatars.githubusercontent.com/u/810438?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/gaearon",
        "html_url": "https://github.com/gaearon",
        "followers_url": "https://api.github.com/users/gaearon/followers",
        "following_url": "https://api.github.com/users/gaearon/following{/other_user}",
        "gists_url": "https://api.github.com/users/gaearon/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/gaearon/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/gaearon/subscriptions",
        "organizations_url": "https://api.github.com/users/gaearon/orgs",
        "repos_url": "https://api.github.com/users/gaearon/repos",
        "events_url": "https://api.github.com/users/gaearon/events{/privacy}",
        "received_events_url": "https://api.github.com/users/gaearon/received_events",
        "type": "User",
        "site_admin": false,
        "name": "dan",
        "company": "@facebook ",
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": "dan_abramov",
        "public_repos": 262,
        "public_gists": 77,
        "followers": 74981,
        "following": 172,
        "created_at": "2011-05-25T18:18:31Z",
        "updated_at": "2022-05-12T18:52:17Z"
      },
      {
        "login": "HamzaSheikh05",
        "id": 107133777,
        "node_id": "U_kgDOBmK7UQ",
        "avatar_url": "https://avatars.githubusercontent.com/u/107133777?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/HamzaSheikh05",
        "html_url": "https://github.com/HamzaSheikh05",
        "followers_url": "https://api.github.com/users/HamzaSheikh05/followers",
        "following_url": "https://api.github.com/users/HamzaSheikh05/following{/other_user}",
        "gists_url": "https://api.github.com/users/HamzaSheikh05/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/HamzaSheikh05/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/HamzaSheikh05/subscriptions",
        "organizations_url": "https://api.github.com/users/HamzaSheikh05/orgs",
        "repos_url": "https://api.github.com/users/HamzaSheikh05/repos",
        "events_url": "https://api.github.com/users/HamzaSheikh05/events{/privacy}",
        "received_events_url": "https://api.github.com/users/HamzaSheikh05/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Hamza Sheikh",
        "company": "Saadia Trading Co.LLC",
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": "Self-Taught Developer",
        "twitter_username": null,
        "public_repos": 3,
        "public_gists": 0,
        "followers": 0,
        "following": 0,
        "created_at": "2022-06-08T15:40:01Z",
        "updated_at": "2022-06-15T17:20:44Z"
      }         
];

const CardList = (props) => {
    return(
        <div>
            {props.profiles.map(profile => <Card {...profile}/>)}
        </div>
    )
};

class Form extends React.Component{
    render(){
        return(
            <form action=''>
                <input type="text" placeholder='Github username'/>
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
        profiles: testData,
    }
    render(){
        return(
            <div>
                <div className='header'>The Github Cards App</div>
                <Form/>
                <CardList profiles={this.state.profiles}/>
            </div>
        )
    }
}

export default AppShell;