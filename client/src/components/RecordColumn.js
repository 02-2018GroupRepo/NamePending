import React, { Component } from 'react';
import Record from './Record';
import SearchBar from './SearchBar';

class RecordColumn extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            storeRecords: props.storeRecords,
            filteredList: props.storeRecords
        }
    }

    _onChangeHandler = (searchTerm) => {
        const re = new RegExp(searchTerm + '.*', 'gi');
        console.log(this.state.storeRecords);
        let filteredList = this.state.storeRecords.filter(record => record.address.match(re) || record.name.match(re));
        this.setState({
        filteredList
        });
    }

    

    render() {
        return (
            <div className="record-col">
                <SearchBar searchBarHandler={this._onChangeHandler} />
                <Record records={this.state.filteredList} />
            </div>
        );
    }
}

export default RecordColumn;