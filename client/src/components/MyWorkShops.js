import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';
import Favorite from './Favorite';
const url = "http://localhost:3001";

class MyWorkShops extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            favorites: []
        }
        this.generateWorkShops = this.generateWorkShops.bind(this);
    }

    sendRequest() {
       
    }

    componentDidMount() {
          axios.post(`${url}/api/favorites`, {
              token: localStorage.getItem('token')
          })
               .then(res => res.data)
               .then(
                 (favorites) => {
                   this.setState({
                       favorites
                    });
                    console.log(favorites);
                  },
                  (error) => {
                    this.setState({
                      error
                    })
                  }
                )
            }

    generateWorkShops(workshopRecords) {

        let storeNumber = workshopRecords.store_id;
        if (workshopRecords.length !== 0) {
            workshopRecords.sort((a, b) => a.date.match(/\d/)[0] - b.date.match(/\d/)[0]);
            return workshopRecords.map(workshop => <Favorite workShop = {workshop} /> );
        } else {
            return <h1>Loading</h1>;
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