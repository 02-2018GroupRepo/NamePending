import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';
import Favorite from './Favorite';
import clientConfig from '../config/config';

class MyWorkShops extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            favorites: [],
            firstLoad: true
        }
        this.generateWorkShops = this.generateWorkShops.bind(this);
    }

    componentDidMount() {
        axios.post(`${clientConfig.url}/api/favorites`, {
            token: localStorage.getItem('token')
        })
             .then(res => res.data)
             .then(
               (favorites) => {  
                 this.setState({
                     favorites: favorites,
                     firstLoad: false
                  });
                },
                (error) => {
                  this.setState({
                    firstLoad: false
                  })
                }
              ) 
    }

    generateWorkShops(workshopRecords, props) {
        console.log(workshopRecords);
        try {
            if (workshopRecords.length !== 0) {
                let storeNumber = workshopRecords.store_id;
                workshopRecords.sort((a, b) => a.date.match(/\d/)[0] - b.date.match(/\d/)[0]);
                return workshopRecords.map(workshop => <Favorite workShop = {workshop} /> );
            } else if (this.state.firstLoad) {
                return <h1 style={{color: "#333", textAlign: "center", marginTop:"200px"}}>Loading...</h1>;
            } else {
                return <h1 style={{color: "#333", textAlign: "center", marginTop:"200px"}}>You have no upcoming workshops</h1>; 
            }
        } catch (e) {
            return <h1 style={{color: "#333", textAlign: "center", marginTop:"200px"}}>You have no upcoming workshops</h1>;     
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.generateWorkShops(this.state.favorites, this.props)}
                </React.Fragment>
        )
    }
}

export default MyWorkShops;