import React, { Component } from 'react'
import { FiSearch } from "react-icons/fi";

class Search extends Component {
 
  render() {

    return (
      <div className="Search">
        <form action="/" className="form-group">
          <FiSearch className="FiSearch"/>
          <input type="text" name="search" id="search" className="form-control input" />
        </form>
      </div>
    )
  }
}
export default Search;

