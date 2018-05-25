import React, {Component} from 'react';
//import axios from 'axios';

class SearchBar extends Component{
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    const searchStore = event.target[0].value;
    this.props.history.push(`./search/${searchStore}`)
  }

  render(){
    return(
      <form  className="search" onSubmit={this.handleSubmit}>
        <input className="searchBar" type="text" placeholder="Zip Code, City, State, or Store #"/>
        <button className="searchIcon" type="submit">Search</button>
      </form>
    )
  }
}
export default SearchBar;