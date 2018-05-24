import React, { Component } from 'react';
import Record from './Record';

const RecordColumn = (props) => {
    return (
        <div className="record-col">
            <Record records={props.storeRecords} />
        </div>
    );
}

export default RecordColumn;