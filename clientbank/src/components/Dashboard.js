import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  getAccounts,
  getOperations,
  rechargeOperateur,
  getSoldeTotal,
  toggle
} from "../actions/ActionComptes";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Compte from "./Compte/Compte";
import Operation from "./Compte/Operation";
import TransactionButton from "./Compte/TransactionButton";
import RechargeButton from "./Compte/RechargeButton";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
      compteSource: "",
      compteDest: "",
      show: false,
      montant: null,
      errors: {}
    };
  }
  showModal = () => {
    this.setState({ show: true });
  };

  componentDidMount() {
    this.props.getAccounts();
    this.props.getOperations();
    this.props.getSoldeTotal();
  }
  annuler() {}
  onSubmit = e => {
    e.preventDefault();
    const transaction = {
      source: this.state.compteSource,
      destination: this.state.compteDest,
      montant: this.state.montant
    };
    this.props.rechargeOperateur(transaction);
  };
  setText = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentWillReceiveProps(nextprops) {
    if (nextprops.errors) {
      this.setState({ errors: nextprops.errors });
    }
  }

  render() {
    const { operations } = this.props.operation;
    const { accounts } = this.props.account;
    const { soldeTotal } = this.props.account;
    const { displaystate } = this.props.display;
    const expcompte = {
      numeroCompte: 1234,
      solde: 900,
      compteLeader: "1456leader"
    };

    return (
      <div className="container-fluid">
        <div className="row">
          {displaystate ? (
            <div className="col-2 style bg-dark">
              <TransactionButton />
            </div>
          ) : (
            <div> </div>
          )}
          <div className={displaystate ? "col-10" : "col-12"}>
            <h1 className="alert">
              <div className="alert alert-dark" role="alert">
                Banque
              </div>
            </h1>

            {accounts == 0 ? (
              <div className="alert alert-info">
                pas de compte pour l'instant, veiller contacter l'agence la plus
                proche
              </div>
            ) : (
              <div className="container">
                <div className="alert alert-info">
                  solde total: {soldeTotal}
                </div>
                <div className="row row-cols-3">
                  {accounts.map(compte => (
                    <Compte
                      key={compte.compteNumber}
                      compte={compte}
                      onClick={numCompte => {
                        if (!this.state.clicked)
                          this.setState({
                            clicked: !this.state.clicked,
                            compteSource: numCompte
                          });
                        else
                          this.setState({
                            clicked: !this.state.clicked,
                            compteDest: numCompte,
                            show: true
                          });
                      }}
                      clicked={this.state.clicked}
                    />
                  ))}
                </div>
              </div>
            )}

            <p>{this.state.errors.statut}</p>

            <div className="col-6">
              <div></div>
            </div>
            <div>
              <div>
                <h2 className="lead mt-4">
                  <div className="alert alert-dark" role="alert">
                    List des compte
                  </div>
                </h2>
                <hr className="my-4" />
              </div>

              <table className="table table-hover">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">compte source</th>
                    <th scope="col">compte destination</th>
                    <th scope="col"> type</th>
                    <th scope="col">montant</th>
                  </tr>
                </thead>
                <tbody className="tables">
                  {operations.map(operation => (
                    <Operation
                      key={operation.id}
                      operation={operation}
                    ></Operation>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  account: PropTypes.object.isRequired,
  getAccounts: PropTypes.func.isRequired,
  operation: PropTypes.object.isRequired,
  getOperations: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  getSoldeTotal: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  account: state.account,
  operation: state.operation,
  errors: state.errors,
  display: state.display
});

export default connect(mapStateToProps, {
  getAccounts,
  getOperations,
  rechargeOperateur,
  getSoldeTotal,
  toggle
})(Dashboard);
