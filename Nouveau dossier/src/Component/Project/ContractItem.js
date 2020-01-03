
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { deleteContract } from '../../actions/ActionContract';
import { getContract } from '../../actions/ActionContract';
import AddContract from "./AddContract";


class ProjectItem extends Component {
    componentDidMount(){
        //  this.props.location.state.user
        // this.props.getContract(abonne)  bit abonne 
    }
  onDeleteClick = id => {
      this.props.deleteContract(id);

  };
  render() {
    const {contrat} =this.props;
    const {agent} =this.props;
    // const {abonne} =this.props.location.state.user;
    return (

                <div className="card mb-1 bg-light">

                <div className="card-header text-primary">
                
                </div>
                <div className="card-body bg-light">
                    <h5 className="card-title">project_task.summary</h5>
                    <p className="card-text text-truncate ">
                    {contrat.abonne}
                    {contrat.agent}
                    </p>
                    {/* <li className="list-group-item delete" onClick={this.onDeleteClick.bind(this,contrat.abonne )} >
                        <i className="fa fa-minus-circle pr-1"> Delete Contract</i>
                    </li> */}
                </div>
                </div>
    );
  }
}

AddContract.propTypes = {
  contrat: PropTypes.object.isRequired,
  getContract: PropTypes.func.isRequired,
  deleteContract: PropTypes.func.isRequired,
 };
 const mapStateToProps = state => ({
  errors: state.errors,
  contrat: state.contrat,
});
 export default connect(mapStateToProps,
  {
   deleteContract,
   getContract
})(
 ProjectItem
);