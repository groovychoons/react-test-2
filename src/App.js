import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Just a lil React test</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          
            <Button variant="contained" color="primary">
      Hello World
    </Button>
        </header>
      </div>

    );
  }
}

export default App;
