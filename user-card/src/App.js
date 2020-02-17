import React from 'react';
import './App.css';
import Followers from './components/Followers';

class App extends React.Component {
  constructor() {
    console.log('calling constructor')
    super();
    this.state = {
      card: ""
    }
  }

  componentDidMount(){
    fetch(`https://api.github.com/users/Cberumen51`)
    .then(res => res.json())
    .then(card => this.setState({card}))
    .catch(err => console.log("error", err))
    console.log("componentDidMount running")
 
  }

  render(){
    {console.log("card info",this.state.card)}
    return (
      <div className="App">
        <div className="App-header">
          <div className="card-wrapper">
            <img src={this.state.card.avatar_url} />
            <div className="info">
            <h3>{this.state.card.name}</h3>
            <p>Username: {this.state.card.login}</p> 
            <p>Location: {this.state.card.location}</p> 
            <p>Github Profile:<a href="https://github.com/Cberumen51">{this.state.card.html_url}</a></p>
            <p>Followers: {this.state.card.followers}</p>
            <p>Following: {this.state.card.following}</p>
            <p>Bio: {this.state.card.bio}</p>
            </div>
            
          </div>
          <Followers />
        </div>
      </div>
    );
  }
}

export default App;
