import React, { Component } from 'react';
import { BsTrashFill } from "react-icons/bs";

class List extends Component {

  render() {
    return (
      <div className="listComponent">
        {this.props.users.map(user => (
          <div key={user.id}>
            <div className="d-flex p-3 list">
              <div className="image">
                <img src="https://media.istockphoto.com/photos/female-it-developer-at-workplace-picture-id1255905237?s=612x612" alt="image dev" /> 
              </div>
              <div className="text">
                <h1 className="h5">{user.nom}</h1>
                <div>{user.description}</div>
              </div>
              <div className="mt-3">
                <BsTrashFill />
              </div>
            </div>
            <div className="line"></div>
          </div>
          
          
        ))}
      </div>
    )
  }
}
export default List;
