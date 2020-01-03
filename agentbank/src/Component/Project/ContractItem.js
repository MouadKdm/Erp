import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteContract } from "../../actions/ActionContract";
import { getContract } from "../../actions/ActionContract";
import AddContract from "./AddContract";

class ContractItem extends Component {
  componentDidMount() {
    //  this.props.location.state.user
    // this.props.getContract(abonne)  bit abonne
  }
  onDeleteClick = id => {
    this.props.deleteContract(id);
  };
  //   render() {
  //     const { contrats } = this.props.contrat;
  //     console.log("hahahahahahahahahhhahahahhaah" + JSON.stringify(contrats));
  //     const { agent } = this.props;
  //     // const {abonne} =this.props.location.state.user;
  //     return (
  //       <div className="card mb-1 bg-light">
  //         <div className="card-header text-primary"></div>
  //         <div className="card-body bg-light">
  //           <h5 className="card-title">contrat numero {contrats.id}</h5>
  //           <div className="card-text text-truncate ">{contrats.id}</div>
  //         </div>
  //       </div>
  //     );
  //   }

  render() {
    const contrat = this.props.contrat;
    return (
      <tr>
        <td>{contrat.id}</td>
        <td>{contrat.abonne.fullName}</td>
        <td>{contrat.abonne.username}</td>
      </tr>
    );
  }
}

export default ContractItem;

// ContractItem.propTypes = {
//   contrat: PropTypes.object.isRequired,
//   getContract: PropTypes.func.isRequired,
//   deleteContract: PropTypes.func.isRequired
// };
// const mapStateToProps = state => ({
//   errors: state.errors,
//   contrat: state.contrat
// });
// export default connect(mapStateToProps, {
//   deleteContract,
//   getContract
// })(ContractItem);
