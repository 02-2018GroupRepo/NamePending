import React, { Component } from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


const renderMarkers = (storeRecords, clickHandler) => {
  if (storeRecords) return storeRecords.map(store => <Marker key={store.id} position={{ lat: Number(store.lat), lng: Number(store.lng) }} onClick={() => clickHandler(store.storeNumber)} />);
}

const MyMapComponent = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `800px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 33.8237508, lng: -84.36593169999999 }}
    >
      {renderMarkers(props.storeRecords, props.markerClickHandler)}
    </GoogleMap>
  );
  
  class MapComponent extends React.PureComponent {
    state = {
      isMarkerShown: false,
    }
  
    componentDidMount() {
      this.delayedShowMarker()
    }
  
    delayedShowMarker = () => {
      setTimeout(() => {
        this.setState({ isMarkerShown: true })
      }, 3000)
    }
  
    render() {
      return (
        <MyMapComponent
          storeRecords={this.props.storeRecords}
          markerClickHandler={this.props.markerClickHandler}
        />
      )
    }
  }

  export default MapComponent;