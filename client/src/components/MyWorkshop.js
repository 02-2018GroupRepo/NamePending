import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import WorkShop from './WorkShop';

class MyWorkshop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            workshop : []
        }
    }

    componentDidMount() {
        axios({
                method: 'POST',
                url: 'http://localhost:3001/getFav',
                data: {
                    token: localStorage.getItem('token')
                }
            }).then((response) => {
                if (response.data.msg === "Success") {
                    console.log("THIS IS THE RESPONSE", response.data.workshopArray);
                    this.setState({
                        workshop: response.data.workshopArray
                    })
                  
                }
            });
    }  

    generateWorkshops(){
        console.log(this.state.workshop[0]);
     const array = this.state.workshop.map(workshopElement => 
                        <WorkShop workShop = {workshopElement} />
                    );
     return array;
    }
    

    render() {
        if(this.state.workshop.length == 0){
            return "Loading..."
        }
        return (
            <React.Fragment>
                {this.generateWorkshops()}
            </React.Fragment>
        )
    }
}

export default MyWorkshop;
