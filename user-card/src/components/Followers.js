import React from 'react'

class Followers extends React.Component {
    constructor() {
        super();
        this.state = {
            followers: []
        }
    }
    componentDidMount(){
        fetch(`https://api.github.com/users/Cberumen51/followers`)
            .then(res => res.json())
            .then(followers =>this.setState({followers}))
            .catch( err => console.log("oh no an error", err))
    }
    render(){
        {console.log(this.state.followers)}
        return (
            <div>
            <div className="follower-title">
                <h1>Followers</h1>
                </div>
                <div className="follower-wrapper">
                {this.state.followers.map(follower => {
                    return (
                        <div className="followers">
                        <img width="200" height="200" src={follower.avatar_url} />
                        <p>{follower.login}</p>
                        </div>
                    )
                })}
                </div>
                
            </div>
        )
    }
}

export default Followers;
