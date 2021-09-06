import React, { Component } from 'react';
import { BsPlus  } from "react-icons/bs";

class Header extends Component {

  state = {
    name: ""
  }
  
  handleChange = (e) =>{
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <div className="headerBox w-100% text-white p-2">
        <h1 className="h5">Ajouter un utilisateur <span>{this.state.name}</span></h1>
        <div>Ajouter en live des utilisateurs</div>
        <form action="/" className="form-group d-flex">
          <div>
            <input type="text" name="name" id="name" className="form-control rounded-pill mt-2" placeholder="Ecrire" onChange={this.handleChange}/>
          </div>
          <div className="input-bottom">
            <div type="submit" className="d-flex justify-content-center align-items-center mt-2"><span className="d-flex justify-content-center align-items-center " onClick={() => this.props.addUser({
              nom:this.state.name,
              description: "Developpeur full-stack JS"
            })}><BsPlus /></span></div>
          </div>
        </form>
      </div>
    )
  }
}

export default Header;
