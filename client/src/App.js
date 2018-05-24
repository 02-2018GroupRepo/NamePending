import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom'
import Signup from './Signup';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
      </div>
     
    );
  }
}

export default App;
