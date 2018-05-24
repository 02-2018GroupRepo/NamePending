import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Signup extends Component{
	constructor(){
		super();
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

		console.log(password, email);

		const signupRequest = axios({
			method: "POST",
			url: "http://localhost:3001/signup",
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
			console.log(signupData)
			if(signupData.data.msg === "signupSuccess"){
				localStorage.setItem('token', signupData.data.token)
				this.props.history.push('/')
			}
		})

	}

	render(){
		return(

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

		)
	}
}

export default Signup;