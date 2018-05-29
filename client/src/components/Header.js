import React, {Component} from 'react';
import NavigationBar from './NavigationBar';
import {Link} from 'react-router-dom';
import './header.css';


class Header extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}

	dropdown() {
		try {
			const e = document.getElementsByClassName('navAndSearch123')[0];
			if (e.style.display === "block") {
				e.style.display = "none";
			} else {
				e.style.display = "block";
			}
		} catch (e) {}
	}

	render(){
		return(
			<div className="row">
				<div className="row title123">
					<div id="navBar"> 
					<div className="col-md-6 hdlogo123">
						<Link to="/"><img className="logo123" src="https://corporate.homedepot.com/sites/default/files/styles/thumbnail/public/image_gallery/THD_logo.jpg?itok=FoQ5H-ZQ"/>
						</Link>
						<p className="textStyle">The Home Depot Workshops</p>
					</div>
					<div className="mobile-nav" style={{marginRight: "25px", color: "#fa6204"}} onClick={this.dropdown}> 
							<i class="fas fa-bars"></i>
					</div>	
					</div>
					<div className="col-md-offset-1 col-md-5 navAndSearch123" style={{marginTop:"18px"}}>
						<NavigationBar isAuth={this.props.isAuth} _isAuthHandler={this.props._isAuthHandler} />
					</div>	
				</div>
				<div className="row orangeBar123">
					<div className="announcement123">
						<p className="atext">Sign up for your next Home Depot Workshop today!</p>
					</div>
				</div>
			</div>
			)
	}
}

export default Header;
