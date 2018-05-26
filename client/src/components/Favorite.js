import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

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
    console.log(workShop)
	return(
       <div className ="workshop-container">
           <div className ="workshop-header">{workShop.name}</div>
              <div className="workshop-details">
                <div className="workshop-col-8">
                <div className="workshop-img">
                    <img src = {workShop.photo_url} />
                    </div> 
                        <p>{workShop.description}</p>
                </div>
                   <div className="workshop-col-4">
                            <h2>{workShop.date}</h2>
                            <h3>{workShop.time}</h3>
                            </div>

              </div>
            </div>


		)
}

}
export default WorkShop;