import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Signup from './components/Signup';
import Login from './components/Login';
import SearchBar from './components/SearchBar'

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={NavigationBar} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/searchbar' component={SearchBar} />
      </div>
     
    );
  }
}

export default App;
