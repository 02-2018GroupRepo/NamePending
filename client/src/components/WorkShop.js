import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './workshop.css';
import {Modal} from 'react-bootstrap';


class WorkShop extends Component{
	constructor(props){
		super(props);
		this.state = {
           buttonClass: "",
           show: false
		}
		this.register = this.register.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleClose() {
    	this.setState({ show: false });
  	}
	

	register(){
		const workShopId = this.props.workShop.id;
		const addToCalendar = axios({
			method: 'POST',
			url: 'http://localhost:3001/addToCalendar',
			data:{
				workShopId,
				token: localStorage.getItem('token')
			}
		})

		addToCalendar.then((response)=>{
			
			if(response.data.msg === "WorkShopAdded"){
				this.setState({
					buttonClass: "hiddenButton",
					show: true
				})
			} else if(response.data.msg === "Workshop not added."){
				this.props.history.push('/login')
			}
		})
	}


render() {
	const workShop = this.props.workShop; 
	return(
		<div>
			<div className="row">
	            <div className ="col-sm-12 titleWS">
	           			<h2>{workShop.name}</h2>
	           	</div>
	        </div>
	        <div className="row">
	        	<div className="col-sm-4 photoWS">
	                   <img src = {workShop.photo_url} /> 
	            </div>
	            <div  className="col-sm-6 description">
	                	<p>{workShop.description}</p>
	            </div>
	            <div className="col-sm-2 timeAndButton">
	                <h4>{workShop.date}</h4>
	                <h5>{workShop.time}</h5>
	                <button data-toggle={this.state.modal} data-target=".bs-example-modal-sm" className="btn btn-primary registerBtn"  id={this.state.buttonClass} onClick={this.register}>Register</button>
	            </div>
	        </div>
	        <hr/>
	    <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Register Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>
        		Thank you for registering to attend the {workShop.name} workshop!
          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.handleClose}>Close</button>
          </Modal.Footer>
        </Modal>
	    </div>
		)
	}
}
export default WorkShop;