import React, { Component } from "react";
import { createCompte } from "../../actions/ActionCompte";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import CreateCarteButton from "./CreateCarteButton";

class AddCompte extends Component {
  constructor() {
    super();
    var day = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    this.state = {
      date: day + "/" + month + "/" + year,
      name: "",
      compteNumber: "",
      soldeCompte: 0,
      typeCompte: "",
      dateCreation: "",
      verificationCode: "",
      active: "",
      valid: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({
      name: this.props.location.state.users
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newCompte = {};
    Object.assign(newCompte, this.state);
    console.log(newCompte);
    this.props.createCompte(
      newCompte,
      this.props.history,
      this.props.location.state.users
    );
    // this.props.createAgence(newCompte,this.props.history);
    //this.props.history.push("/addCarte");
    this.props.history.push("/dashboard");
  }
  render() {
    const { errors } = this.state;
    console.log("errors : " + JSON.stringify(errors));

    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Create Compte</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Abonne userName"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.compteNumber
                    })}
                    placeholder="Abonne compteNumber"
                    name="compteNumber"
                    value={this.state.compteNumber}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="solde"
                    name="soldeCompte"
                    value={this.state.soldeCompte}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Abonne typeCompte"
                    name="typeCompte"
                    value={this.state.typeCompte}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Abonne dateCreation"
                    name="dateCreation"
                    defaultValue={this.state.date}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Abonne email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>

                <div>
                  <select
                    defaultValue={"-1"}
                    name="active"
                    className="form-controle form-control-lg col-12  "
                    onChange={this.onChange}
                  >
                    <option value="active">Active</option>
                    <br />
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
                <br />
                <div>
                  <select
                    defaultValue={"-1"}
                    name="valid"
                    className="form-controle form-control-lg col-12  "
                    onChange={this.onChange}
                  >
                    <option value="valid">Valid</option>
                    <option value="invalid">Invalid</option>
                  </select>
                </div>

                <div className="form-group p-2">
                  <input
                    type="submit"
                    className="btn btn-info btn-dark btn-block mt-4"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
AddCompte.propTypes = {
  errors: PropTypes.object.isRequired,
  createCompte: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, {
  createCompte
})(AddCompte);
