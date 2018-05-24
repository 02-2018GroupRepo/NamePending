import React, {Component} from 'react';

class Login extends Component{

  handlelogin(event){
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const loginRequest = axios({
      method: "POST",
      url: "http://localhost:3030/login",
      data: {
        email,
        password
      }
    });
    loginRequest.then((loginData)=>{
      if(loginData.data.msg === "Login Success"){
				localStorage.setItem('token', loginData.data.token)
				this.props.history.push('/')
			}

    });
  }

  render(){
    return(
      <form onSubmit={this.handlelogin}>
	      <div className="form-group">
	        <label htmlFor="email">Email address:</label>
	        <input type="email" className="form-control" id="email" />
	      </div>
	      <div className="form-group">
	        <label htmlFor="pwd">Password:</label>
	        <input type="password" className="form-control" id="pwd" />
	      </div>
	      
	      <button type="submit" className="btn btn-default">Submit</button>
	    </form>
    )
  }
}
export default Login;