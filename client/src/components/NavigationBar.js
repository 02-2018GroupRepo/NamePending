import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
const url = 'http://localhost:3001';

class NavigationBar extends Component{

  constructor(props) {
    super(props);
    this.state = {
      isAuth: this.props.isAuth
    }
  }

  componentDidMount() {

    axios.post(`${url}/users/validate`, {
      token: localStorage.getItem('token')
    })
      .then(res => res.data)
      .then((json) => {
          console.log(json);
           this.setState({
               isAuth: json.isValid
            });
          },
          (error) => {
            this.setState({
              error
            })
          }
        ) 
  }

  _isAuthorized() {
    if (this.state.isAuth) {
      return (<React.Fragment> 
                <Link to="/myworkshops">My Workshops</Link>
                <Link to="/" onClick={this._logout}>Logout</Link>
                </React.Fragment>)
    } else {
      return (<React.Fragment>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Login</Link>
              </React.Fragment>)
    }
  }

  _logout = () => {
    localStorage.setItem('token', "");
    this.props._isAuthHandler(false);
    this.setState({
      isAuth: false
    })
  }


  render(){
    return(
      <div className="navLinks" id="THD">
        <div>
          <Link to="/">Home</Link>
          {this._isAuthorized()}
        </div>
      </div>
    ) 
  }
}

export default NavigationBar;