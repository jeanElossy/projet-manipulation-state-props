import React, { Component } from 'react';
import { BsPlus  } from "react-icons/bs";
import Search from './Search';

class Header extends Component {
 
  state = {
    nom: ""
  }
 
  handleChange = (e) => {
    this.setState({
      nom: e.target.value
    })
  }

  add = () =>{
    this.props.userAdd({
      id: new Date().getTime(),
      nom: this.state.nom,
      description: "Developpeur Full-stack Js"
    })
  }

  render() {
    return (
      <div className="headerBox w-100% text-white p-2">
        <div style={{float: "right"}}>
          <Search />
        </div>
        <h1 className="h5 mt-5">Ajouter un utilisateur <span>{this.state.nom}</span></h1>
        <div>Ajouter en live des utilisateurs</div>
        <form action="/" className="form-group d-flex">
          <div>
            <input type="text" name="name" id="name" className="form-control rounded-pill mt-2" placeholder="Ecrire" onChange={this.handleChange}/>
          </div>
          <div className="input-bottom">
            <div type="submit" className="d-flex justify-content-center align-items-center mt-2" onClick={this.add}>
          <span className="d-flex justify-content-center align-items-center"><BsPlus /></span></div>
          </div>
        </form>
      </div>
    )
  }
}

export default Header;
