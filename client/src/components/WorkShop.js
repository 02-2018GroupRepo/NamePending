import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class WorkShop extends Component{
	constructor(props){
		super(props);
		this.state={
           buttonClass: "inline-block"
		}
		this.register = this.register.bind(this);
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
					buttonClass: "none"
				})
			} else if(response.data.msg === "Workshop not added."){
				this.props.history.push('/login')
			}
		})
	}


render() {
	const workShop = this.props.workShop; 
	return(
       <div className ="col-sm-12">
           <div className ="title"><h1>{workShop.name}</h1></div>
              <div className="photo">
                   <img src = {workShop.photo_url} /> </div>
                   <div  className="description"><p>{workShop.description}</p></div>
                   <div className="timeAndButton">
                            <h2>{workShop.date}</h2>
                            <h3>{workShop.time}</h3>
                           <button className="registerBtn"  display={this.state.buttonClass} onClick={this.register}>Register</button>
                            </div>

              </div>


		)
}

}
export default WorkShop;