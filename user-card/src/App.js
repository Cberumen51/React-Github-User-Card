import React from 'react';
import './App.css';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    console.log('calling constructor')
    super();
    this.state = {
      card: [],
    }
  }

  componentDidMount(){
    fetch(`https://api.github.com/users/Cberumen51`)
    .then(res => res.json())
    .then((responseJson) => {
      console.log("data", responseJson)
    })
    .then(card => this.setState({card}))
    .catch(err => console.log("error", err))
    console.log("componentDidMount running")
  }






  render(){
    return (
      <div className="App">
        <div className="App-header">
          <h1>title</h1>
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
