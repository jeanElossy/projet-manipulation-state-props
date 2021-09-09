import React, { Component } from 'react';
import Header from "./Header";
import List from "./List";

class Card extends Component {

  state = {
    persons: []
  }
  
  handleAddUser = (user) =>{
    const newUsers = [...this.state.persons];
    newUsers.push(user)
    this.setState({
      persons: newUsers
    })
  }

  handleDeleteUser = (id) =>{
    
    const newState = this.state.persons.filter(user =>
      user.id !== id
      
    );
    this.setState({
      persons: newState
    })
    
  }


  render() {
    return (
      <div className="container">
        <div className="box border border-dark">
          <Header 
            userAdd={this.handleAddUser}
          />
          <List 
            users={this.state.persons}
            deleteUser={this.handleDeleteUser}
          />
        </div>
      </div>
    );
  }
}

export default Card;
