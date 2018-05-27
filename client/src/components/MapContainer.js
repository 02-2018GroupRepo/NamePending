import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import MapComponent from './MapComponent';
import RecordColumn from './RecordColumn';


class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      storeData: props.storeRecords
    }
  }

  _markerClickHandler = (storeId) => {
    try {
      document.querySelector('.shadow').style.boxShadow = "";
      document.querySelector('.shadow').classList.remove('shadow');
    } catch (e) {}
    try {
      document.querySelector(`.store${storeId}`).scrollIntoView({ 
        behavior: 'smooth' 
      });
      document.querySelector(`.store${storeId}`).classList.add('shadow');
      document.querySelector(`.store${storeId}`).style.boxShadow = "0 7px 35px -2px rgba(0,0,0,.53)";
    } catch (e) {}
    
  }


  
  render() {
    
    return (
      <React.Fragment>
      <div className="map-container">
        <div id="map">
          <MapComponent storeRecords={this.state.storeData} markerClickHandler={this._markerClickHandler} />
          </div>
        </div>
         <RecordColumn storeRecords={this.state.storeData} />
         <div className="clearfix"></div>
         </React.Fragment>
         )
        }
}

export default MapContainer;
