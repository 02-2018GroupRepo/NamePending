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




}

}
export default WorkShop;