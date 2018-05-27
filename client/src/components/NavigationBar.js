import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavigationBar extends Component{
  render(){
    return(
      <div className="navLinks" id="THD">
        <div>
          <Link to="/">Home</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
          <Link to="/myworkshop">My Workshops</Link>
        </div>
      </div>
    ) 
  }
}

export default NavigationBar;