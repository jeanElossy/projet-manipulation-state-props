import React, { Component } from 'react';
import Header from "./Header";
import List from "./List";

class Card extends Component {

  state = {
    persons : []
  }

  handleAddUser = (user) => {
    const newState = [...this.state.persons];
    newState.push(user)

    this.setState({
      persons: newState
    })
  }

  deleteUser = (user) =>{
    const newUsers = this.state.persons.filter(user => 
      user !== user);

    console.log(newUsers);

    this.setState({
      persons: newUsers
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
            deleteClickHnadler={this.deleteUser.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Card;
