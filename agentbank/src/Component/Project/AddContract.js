import React, { Component } from "react";
import { createContract } from "../../actions/ActionContract";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import CreateCompteButton from "./CreateCompteButton";
import { login } from "../../actions/securityAction";

class AddContract extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      agent: {},
      active: false,
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      username: this.props.location.state.user
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(JSON.stringify(this.state));
  }
  onSubmit(e) {
    e.preventDefault();
    const newContract = {};
    Object.assign(newContract, this.state);
    console.log(newContract);
    this.props.createContract(
      newContract,
      this.props.history,
      this.props.location.state.user
    );

    // this.props.createCompte(newContract,this.props.history);
    // this.props.history.push("/addCompte");
  }
  handlechange = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }));
    console.log(JSON.stringify(this.state));
  };

  render() {
    const error = this.props.errors;
    const { errors } = this.state;

    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Create Contrat</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.username
                    })}
                    placeholder="username"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Agent"
                    name="agent"
                    value={this.state.agent.name}
                    onChange={this.onChange}
                  />
                </div>

                <div>
                  <select
                    defaultValue={"-1"}
                    name="active"
                    className="form-controle form-control-lg col-12  "
                    onChange={() => {
                      this.setState(prevState => ({
                        active: !prevState.active
                      }));
                      console.log(JSON.stringify(this.state));
                    }}
                  >
                    <option>Actif</option>
                    <option>Inactif</option>
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
AddContract.propTypes = {
  errors: PropTypes.object.isRequired,
  createContract: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  security: state.security
});

export default connect(mapStateToProps, {
  createContract,
  login
})(AddContract);
