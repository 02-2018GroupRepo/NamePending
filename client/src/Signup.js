import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import clientConfig from './config/config';

class Signup extends Component{
	constructor(props){
		super(props);
		console.log(props);
		this.handleSignup = this.handleSignup.bind(this);
	}

	handleSignup(event){
		event.preventDefault();

		const email = document.getElementById('email').value;
		const password = document.getElementById('pwd').value;
		const firstName = document.getElementById('firstName').value;
		const lastName = document.getElementById('lastName').value;
		const phone = document.getElementById('phone').value;
		const address = document.getElementById('address').value;

		const signupRequest = axios({
			method: "POST",
			url: `${clientConfig.url}/signup`,
			data: {
				email,
				password,
				firstName,
				lastName,
				phone,
				address
			}
		});

		signupRequest.then((signupData)=>{
			if(signupData.data.msg === "signupSuccess"){
				localStorage.setItem('token', signupData.data.token);
				this.props._isAuthHandler();
				this.props.props.history.push('/')
			}
		})

	}

	render(){
		return(
			<div className="col-sm-offset-3 col-sm-6">
			<div className="signUpText">
				<p>Sign up for a free account to register for any workshop The Home Depot has to offer. <br />
				*** All fields are required.</p>
			</div>
			<form onSubmit={this.handleSignup}>
				<div className = "form-group">
					<label htmlFor="email">Email Address:</label>
					 <input type="email" className="form-control" id="email"/>
	 			</div>
	 			<div className="form-group">
	  				<label htmlFor="pwd">Password:</label>
	  				<input type="password" className="form-control" id="pwd"/>
	 			</div>
	 			<div className="form-group">
	  				<label htmlFor="firstName">First Name:</label>
	  				<input type="text" className="form-control" id="firstName"/>
	 			</div>
				<div className="form-group">
	  				<label htmlFor="lastName">Last Name:</label>
	  				<input type="text" className="form-control" id="lastName"/>
	 			</div>
				<div className="form-group">
	  				<label htmlFor="phone">Phone Number:</label>
	  				<input type="phone" className="form-control" id="phone"/>
	 			</div>
	 			<div className="form-group">
	  				<label htmlFor="address">Address:</label>
	  				<input type="text" className="form-control" id="address"/>
	 			</div>
	 			<button type="submit" className="btn btn-default">Sign Up</button>
			</form>
			</div>
		)
	}
}

export default Signup;