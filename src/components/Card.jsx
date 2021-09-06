import React, { Component } from 'react';
import Header from "./Header";
import List from "./List";

class Card extends Component {

  state = {
    persons : [
      
    ]
  }

  handleAddUser = (user) => {
    const newState = [...this.state.persons];
    newState.push(user)

    this.setState({
      persons: newState
    })
  }

  render() {
    return (
      <div className="container">
        <div className="box border border-dark">
          <Header 
            addUser={this.handleAddUser} 

          />
          <List 
            users={this.state.persons}
            
          />
        </div>
      </div>
    );
  }
}

export default Card;
