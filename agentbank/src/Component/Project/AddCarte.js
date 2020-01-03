import React, {Component} from 'react'
import { createCarte } from '../../actions/ActionCarte';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import classnames from "classnames";

class AddAgent extends Component{
    constructor(){
        super();
        this.state= {
            numeroCompte: "",
            maximum: "",
            dateExperation: "",
            type: "",
            active: "",
            errors: {},
            
            
        };  
        this.onChange=this.onChange.bind(this); 
        this.onSubmit=this.onSubmit.bind(this);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors: nextProps.errors})
        }
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        const newProject ={};
        Object.assign(newProject,this.state)
        console.log(newProject);
        // this.props.createCarte(newProject,this.props.history);
        // this.props.history.push("/addCo");
    }
    render(){
        const { errors} =this.state;
        return(
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">
                                Create Carte
                            </h5> 
                            <hr/>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg",{
                                            "is-invalid":errors.numeroCompte
                                        })}
                                        placeholder="Agence Id"
                                        name="numeroCompte"
                                        value={this.state.numeroCompte}
                                        onChange={this.onChange}
                                        />
                                </div>
                                    {errors.IdAgent && ( 
                                        <div className="invalid-feedback">
                                            {errors.IdAgent}
                                        </div>
                                    )}
                                <div className="form-group">
                                     <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Agent Name"
                                        name="maximum"
                                        value={this.state.maximum}
                                        onChange={this.onChange}
                                      />
                                 <div className="form-group">
                                     <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        placeholder="dateExpiration"
                                        name="dateExpiration"
                                        value={this.state.dateExpiration}
                                        onChange={this.onChange}
                                      />
                                </div>    
                                </div> 
                                <div className="form-group">
                                     <input
                                        type="number"
                                        className="form-control form-control-lg"
                                        placeholder="Agence type"
                                        name="type"
                                        value={this.state.type}
                                        onChange={this.onChange}
                                      />
                                </div>
                                <div>               
                                    <select
                                        defaultValue={"-1"}
                                        name="compte"
                                        className="form-controle form-control-lg col-12  "
                                        onChange={this.setText}
                                    >
                                        <option value="active">
                                        Active
                                        </option>
                                        <option
                                            value="inactive">
                                                Inactive
                                        </option>
                                        
                                    </select>
                                    </div>
                                    <div className="form-group p-2">
                                    <button type="submit" className="btn btn-dark">
                                        Valider
                                    </button>
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
    createCarte: PropTypes.func.isRequired,
 
   };
   
   const mapStateToProps = state => ({
     errors: state.errors,
   });
   
   export default connect(mapStateToProps,
      {
       createCarte
    })(
     AddAgent
   );