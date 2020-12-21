import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {

  state = {
    username: 'user'
  };

  nameChangedHandler = (e) => {
    this.setState ( { 
        username: e.target.value
    } );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <UserInput 
            name={this.state.username}
            changed={ this.nameChangedHandler }
          />
          <UserOutput name="From app 1" />
          <UserOutput name={this.state.username}  />
        </header>
      </div>
    );
    }
}

export default App;
