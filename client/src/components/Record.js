import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const preventEventDefault = (event) => {
  event.preventDefault();
}

const Record = (props) => {
  const recordCards = props.records.map(record => { 
    return (<a href="/" onClick={preventEventDefault} className="ui card" id="card" key={record.id} style={{margin: "10px auto", textDecoration: "none", color: "black", width: "95%"}}>
                <h3 style={{textAlign: "left", paddingLeft: "14px"}}>{`${record.title} #${record.storeNumber}`}</h3>
                <div className="content" id="card-content" style={{textAlign: "left", fontSize: "14px"}}>
                    <p>{record.address}<br /></p>
                    <p>{record.phone}</p>
                    <Link style={{textDecoration: "none"}} to={`/stores/${record.storeNumber}`}><div className="btn-orange">View Workshops</div></Link>
                    </div>
             </a>)
  });
    return (
      <React.Fragment>
      {recordCards}
      </React.Fragment>
    )
}

export default Record;