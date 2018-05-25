import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import WorkShop from './WorkShop';

class WorkShopContainer extends Component {

    constructor(props) {
        super(props);
        this.generateWorkShops = this.generateWorkShops.bind(this);
    }

    generateWorkShops(workshopRecords, props) {

        let storeNumber = props.props.match.params.id
        if (workshopRecords.length !== 0) {
            return workshopRecords.filter(workshop => Number(workshop.store_id) === Number(storeNumber))
                                  .map(workshop => <WorkShop workShop = {workshop} /> );
        } else {
            return <h1>Loading</h1>;
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.generateWorkShops(this.props.workshopRecords, this.props)}
                </React.Fragment>
        )
    }
}

export default WorkShopContainer;
