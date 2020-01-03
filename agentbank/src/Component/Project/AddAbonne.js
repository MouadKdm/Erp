import React, { Component } from "react";
import { createAbonne } from "../../actions/ActionAbonne";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import CreateCompteButton from "./CreateCompteButton";
import CreateContractButton from "./CreateContractButton";

class AddAbonne extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      fullName: "",
      birthday: "",
      adresse: "",
      email: "",
      sexe: "",
      password: "",
      confirmPassword: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
    const newAbonne = {};

    Object.assign(newAbonne, this.state);
    console.log("new abonne " + JSON.stringify(newAbonne));
    this.props.createAbonne(newAbonne, this.props.history, this.state.username);

    // this.props.history.push("/addContract");
  }
  render() {
    const error = this.props.errors;
    const { errors } = this.state;

    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Create Abonne</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.username
                    })}
                    placeholder="Abonne username"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Abonne Name"
                    name="fullName"
                    value={this.state.fullName}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    placeholder="Abonne birthday"
                    name="birthday"
                    value={this.state.birthday}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Abonne adress"
                    name="adresse"
                    value={this.state.adresse}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
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
                    name="sexe"
                    className="form-controle form-control-lg col-12  "
                    onChange={this.onChange}
                  >
                    <option value="femme">Femme</option>
                    <option value="homme">Homme</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="confirm password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.onChange}
                  />
                </div>

                {/* <div className="form-group p-2">
                                    <button type="submit" className="btn btn-dark">
                                        Valider
                                    </button>
                                </div> */}
                <input
                  type="submit"
                  className="btn btn-info btn-dark btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
AddAbonne.propTypes = {
  errors: PropTypes.object.isRequired,
  createAbonne: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, {
  createAbonne
})(AddAbonne);
