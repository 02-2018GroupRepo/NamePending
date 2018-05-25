import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom'
import Signup from './Signup';
import axios from 'axios';
import Login from './components/Login';
import WorkShop from './components/WorkShop';
import storeData from './data';
import workShopData from './workshopData';
import MapContainer from './components/MapContainer';
import WorkShopContainer from './components/WorkshopContainer';
import NavigationBar from './components/NavigationBar';
const url = "http://localhost:3001";
/* Set to true if using data from local json file  */
const useLocalData = true;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      storeData: useLocalData ? storeData 
                              : [],
      markerSelectionNumber : null,
      workshopData: useLocalData ? workShopData 
                                 : [],                              
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

            axios.get(`${url}/api/workshops`)
            .then(res => res.data)
            .then(
              (workshopRecords) => {
                this.setState({
                  workshopData: workshopRecords
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
        <Route path="/" component={NavigationBar} />
        <Route exact path="/" component={() => <MapContainer storeRecords={this.state.storeData} markerClickHandler={this._markerClickHandler} />}  />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path="/stores/:id" component={(props) => <WorkShopContainer workshopRecords={this.state.workshopData} props={props} />}/>
      </div>
    );
  }
}

export default App;