import React from 'react';
import logo from './logo.svg';
import './App.css';
import configureStore from './configureStore'
// REMOVE for testing
import { fetchWorlds, updateSearchText } from './actions/actions'


/// REMOVE for testing
const store = configureStore()
store.dispatch(updateSearchText("hi"))
store.dispatch(fetchWorlds({
    search: 'sleep night',
    sort: 'popularity',
    platform: 'standalonewindows,android',
  })).then(() => console.log(store.getState()))


function App() {
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
      </header>
    </div>
  );
}

export default App;
