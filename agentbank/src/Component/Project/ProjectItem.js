import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteContract } from "../../actions/ActionContract";
import { getContract } from "../../actions/ActionContract";
import AddContract from "./AddContract";
import ContractItem from "./ContractItem";

class ProjectItem extends Component {
  componentDidMount() {
    this.props.getContract();
    //  cont this.props.location.user
    // this.props.getContract(abonne)  bit abonne
  }

  render() {
    const { contrats } = this.props.contrat;
    console.log(JSON.stringify(contrats));
    // const contra = contrats.map(contrat => (
    //   <ContractItem key={contrat.abonne} contrat={contrat} />
    // ));

    // let actifContrat = [];
    // let InactifContrat = [];
    // for (let item of contrats) {
    //   if (item.active === true) {
    //     actifContrat.push(item);
    //   }
    //   if (item.active === false) {
    //     InactifContrat.push(item);
    //   }
    // }

    return (
      <div>
        <div>
          <h2 className="lead mt-4"></h2>
          <hr className="my-4" />
        </div>

        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">Numero de contrat</th>
              <th scope="col">nom de client</th>
              <th scope="col"> username de client</th>
            </tr>
          </thead>
          <tbody className="tables">
            {contrats.map(contrat => (
              <ContractItem key={contrat.id} contrat={contrat}></ContractItem>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

ProjectItem.propTypes = {
  contrat: PropTypes.object.isRequired,
  getContract: PropTypes.func.isRequired,
  deleteContract: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  errors: state.errors,
  contrat: state.contrat
});
export default connect(mapStateToProps, {
  deleteContract,
  getContract
})(ProjectItem);
