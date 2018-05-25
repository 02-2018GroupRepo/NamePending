import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom'
import Signup from './Signup';
import axios from 'axios';
import Login from './components/Login';
import WorkShop from './components/WorkShop';
import storeData from './data';
import MapContainer from './components/MapContainer';
import WorkShopContainer from './components/WorkshopContainer';
const url = "http://localhost:3001";
/* Set to true if using data from local json file  */
const useLocalData = true;

const workshop = {
		name: "Bird House",
		photo_url: "data:image/jpeg;base64,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",
		description: "Learn how to build fabulous bird houses that you can sell for over 300 dollars.",
		date: "June 1, 2018",
		time: "9am to 12pm",
		id: 1

	}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      storeData: useLocalData ? storeData 
                              : [],
      markerSelectionNumber : null,
      workshopData: [],                              
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
        <Route path="/stores/:id" component={(props) => <WorkShopContainer workshopRecords={this.state.workshopData} props={props} />}/>
        {/* <Route path='/WorkShop' component={(props)=>(
        	<WorkShop workShop = {workshop} />
        )} /> */}
      </div>
    );
  }
}

export default App;