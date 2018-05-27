import React, {Component} from 'react';

class SearchBar extends Component{

  constructor(props){
    super(props);
    console.log(props);
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event) {
    const input = event.target.value;
    this.props.searchBarHandler(input);
}

  render(){
    const iconStyle = {fontSize: '1.2rem', color: '#b0adab'};
    return(
        <div className="searchbar-wrapper">
            <div className="searchbar">
                <input className="searchBar" onChange={this.searchHandler} type="text" placeholder="Zip Code, City, State, or Store #"/>
                </div>
                <div><i className="fas fa-search" style={iconStyle}></i></div>
        </div>
    )
  }
}
export default SearchBar;