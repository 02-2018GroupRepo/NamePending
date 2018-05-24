import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom'
import Signup from './Signup';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/signup' component={Signup} />
      </div>
     
    );
  }
}

export default App;
