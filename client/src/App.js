import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom'
import Signup from './Signup';
import axios from 'axios';
import Login from './components/Login';
import storeData from './data';
import MapContainer from './components/MapContainer';
import $ from 'jquery';
const url = "http://localhost:3001";
/* Set to true if using data from local json file  */
const useLocalData = true;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      storeData: useLocalData ? storeData 
                              : [],
      markerSelectionNumber : null                              
      }
  
    this._markerClickHandler = this._markerClickHandler.bind(this);  
  }

  componentDidMount() {
    if (!useLocalData) {
      axios.get(`${url}/api/stores`)
           .then(res => res.data)
           .then(
             (storeRecords) => {
               this.setState({
                  storeData: storeRecords
                });
              },
              (error) => {
                this.setState({
                  error
                })
              }
            )
        }
      }  
    
    _markerClickHandler(storeId) {

      try {
        document.querySelector('.shadow').style.boxShadow = "";
        document.querySelector('.shadow').classList.remove('shadow');
      } catch (e) {

      }
      document.querySelector(`.store${storeId}`).scrollIntoView({ 
          behavior: 'smooth' 
        });
      document.querySelector(`.store${storeId}`).classList.add('shadow');
      document.querySelector(`.store${storeId}`).style.boxShadow = "0 7px 35px -2px rgba(0,0,0,.53)";
    }

  render() {
    return (
      <div>
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Route exact path="/" component={() => <MapContainer storeRecords={this.state.storeData} markerClickHandler={this._markerClickHandler} />}  />
      </div>
    );
  }
}

export default App;
