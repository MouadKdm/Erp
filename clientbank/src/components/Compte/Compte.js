import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Compte extends Component {
  handleclick = () => {
    this.props.onClick(this.props.compte.numeroCompte);
  };

  render() {
    const compte = this.props.compte;
    return (
      <div className="col">
        <div className="card" style={{ width: 15 + "rem" }}>
          <div className="card-body">
            <h5 className="card-title">numero: {compte.compteNumber}</h5>
            <p className="card-text">solde: {compte.soldeCompte}</p>
            <p className="card-text">leader: {compte.compteId}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Compte;
