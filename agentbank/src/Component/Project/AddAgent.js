import React, { Component } from "react";
import { createCompte, getUsers } from "../../actions/ActionCompte";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import { getAllUsers } from "../../actions/ActionUser";

class AddAgent extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      compteNumber: "",
      soldeCompte: 0,
      typeCompte: "",
      dateCreation: "",
      verificationCode: "",
      active: "",
      valid: "",
      errors: {}
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  setText = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit(e) {
    e.preventDefault();
    const newProject = {};
    Object.assign(newProject, this.state);
    console.log(newProject);
    this.props.createCompte(
      newProject,
      this.props.history,
      this.state.username
    );
  }
  componentDidMount() {
    this.props.getAllUsers();
  }
  render() {
    const { errors } = this.state;
    const { users } = this.props.client;
    // console.log(JSON.stringify(users));
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Create Compte</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group  ">
                  <label className="form-controle">Numero de compte</label>
                  <div />
                  <select
                    defaultValue={"-1"}
                    name="username"
                    className="form-controle form-control-lg col-12  "
                    onChange={this.setText}
                  >
                    {" "}
                    <option value="-1" disabled>
                      choose
                    </option>
                    {users.map(user => (
                      <option value={user.username} key={user.username}>
                        {user.username}
                      </option>
                    ))}
                  </select>
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
                    onChange={this.setText}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="solde"
                    name="soldeCompte"
                    value={this.state.soldeCompte}
                    onChange={this.setText}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Abonne typeCompte"
                    name="typeCompte"
                    value={this.state.typeCompte}
                    onChange={this.setText}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Abonne dateCreation"
                    name="dateCreation"
                    defaultValue={this.state.date}
                    onChange={this.setText}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Abonne email"
                    name="email"
                    value={this.state.email}
                    onChange={this.setText}
                  />
                </div>

                <div>
                  <select
                    defaultValue={"-1"}
                    name="active"
                    className="form-controle form-control-lg col-12  "
                    onChange={this.setText}
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
                    onChange={this.setText}
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
AddAgent.propTypes = {
  errors: PropTypes.object.isRequired,
  createCompte: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  getAllUsers: PropTypes.func.isRequired,
  client: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  user: state.user,
  client: state.client
});

export default connect(mapStateToProps, {
  createCompte,
  getUsers,
  getAllUsers
})(AddAgent);
