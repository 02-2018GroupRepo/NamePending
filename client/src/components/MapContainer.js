import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import MapComponent from './MapComponent';
import RecordColumn from './RecordColumn';


const MapContainer = (props) => {

    return (
        <React.Fragment>
        <div className="map-container">
          <div id="map">
            <MapComponent storeRecords={props.storeRecords} markerClickHandler={props.markerClickHandler} />
            </div>
          </div>
           <RecordColumn storeRecords={props.storeRecords} />
           <div className="clearfix"></div>
           </React.Fragment>
    )
}

export default MapContainer;
