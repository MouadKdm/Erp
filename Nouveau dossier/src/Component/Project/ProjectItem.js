import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { deleteContract } from '../../actions/ActionContract';
import { getContract } from '../../actions/ActionContract';
import AddContract from "./AddContract";
import ContractItem from "./ContractItem";


class ProjectItem extends Component {
    componentDidMount(){
        //  this.props.location.state.user
        // this.props.getContract(abonne)  bit abonne 
    }
  onDeleteClick = id => {
      this.props.deleteContract(id);

  };
  render() {
    
    // const {abonne} =this.props.location.state.user;
    const  { contrats } =this.props;
    // const contra = contrats.map(contrat=>
    //     (<ContractItem key={contrat.abonne} contrat={contrat}/>
    //      ));

    // let actifContrat=[];
    // let InactifContrat=[];
    //     for(let i=0;i<contrats.length;i++){
    //         console.log(contra[i]);
    //     if(contra[i].contrats.status==="avtive"){
    //         actifContrat.push(contra[i]);
    //     }
    //     if(contra[i].contrats.status==="inactive"){
    //         InactifContrat.push(contra[i]);
    //     }
    //     }
         
    return (
                <html lang="en">
                <body>
                    <div className="container">
                        <br />
                        <hr />
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card text-center mb-2">
                                        <div className="card-header bg-secondary text-white">
                                        Actif
                                        </div>
                                    </div>
                                    
                                   {/* {actifContrat} */}
                                
                                </div>
                                <div className="col-md-4">
                                    <div className="card text-center mb-2">
                                        <div className="card-header bg-dark text-white">
                                            Inactif
                                        </div>
                                    </div>
                                    {/* {InactifContrat} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </body>

                </html>
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