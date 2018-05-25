import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavigationBar extends Component{
  render(){
    return(
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Home Depot</Link>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </nav>
    ) 
  }
}

export default NavigationBar;