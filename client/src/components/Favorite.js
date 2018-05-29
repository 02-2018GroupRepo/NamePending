import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import clientConfig from '../config/config';

class WorkShop extends Component {
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
			url: `${clientConfig.url}/addToCalendar`,
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
    console.log(workShop)
	return(
       <div className ="row">
           <div className ="col-sm-12 workshop-header">{workShop.name}</div>
              <div className="row">
                <div className="col-sm-4 photoWS">
                    <img src = {workShop.photo_url} />
                    </div> 
					<div className="col-sm-6 description">
                        <p>{workShop.description}</p>
						</div>
                   <div className="col-sm-2">
                            <div className="favorite-date">{workShop.date}</div>
                            <div className="favorite-time">{workShop.time}</div>
                            <div className="favorite-time">{workShop.address}</div>
                            </div>

              </div>
            </div>


		)
// <div><div class="row"><div class="col-sm-12 titleWS"><h2>Installing Tile Backsplash</h2></div></div><div class="row"><div class="col-sm-4 photoWS"><img src="https://www.homedepot.com/workshops/image/a15d9100-44a0-11e8-820f-f59d86080964/DIY_17_Installing_Tile_Blacksplash_PSD.jpg"></div><div class="col-sm-6 description"><p>Rethink the most visited rooms in your home with a backsplash install. Our Store Associates will cover trending and classic tile options, demonstrate how to prepare your surface and instruct you how to cut your project time down by mounting tiles with SimpleMat adhesive. SimpleMat adhesive allows for immediate grouting, turning your backsplash installation into a one day project.</p></div><div class="col-sm-2 timeAndButton"><h4>Saturday, Jun 2, 2018</h4><h5>10:00 AM - 11:30 AM</h5><button data-target=".bs-example-modal-sm" class="btn btn-primary registerBtn" id="">Register</button></div></div><hr></div>




}

}
export default WorkShop;