import React from 'react';
import logo from '../logo.svg';
import '../App.css';

import Menu from '../components/Menu/index';
import UserList from '../components/UserList/index';



function App(){
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Menu />
        <br/>
        <hr/>
        <UserList />
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

