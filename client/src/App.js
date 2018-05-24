import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom'
import Signup from './Signup';
import axios from 'axios';
import Login from './components/Login';
import storeData from './data';
import MapContainer from './components/MapContainer';
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

      let temp = this.state.storeData[0];
    
      if (temp) {
        let selectedStoreIndex = this.state.storeData.findIndex(store => storeId === store.storeNumber);
        let data = this.state.storeData;
        data[0] = data[selectedStoreIndex];
        data[selectedStoreIndex] = temp;
        this.setState({
          storeData: data
        });
      }    
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
