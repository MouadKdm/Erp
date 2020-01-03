import React, {Component} from 'react'
import { createAgent } from '../../actions/ActionAgent';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import classnames from "classnames";

class AddAgent extends Component{
    constructor(){
        super();
        this.state= {
            IdAgent:"",
            FullName: "",
            UserName: "",
            Password: "",
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
        this.props.createAgent(newProject,this.props.history);

    }
    render(){
        const { errors} =this.state;
        return(
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">
                                Create Agent 
                            </h5> 
                            <hr/>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg",{
                                            "is-invalid":errors.IdAgent
                                        })}
                                        placeholder="Agence Id"
                                        name="IdAgent"
                                        value={this.state.IdAgent}
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
                                        name="FullName"
                                        value={this.state.FullName}
                                        onChange={this.onChange}
                                      />
                                </div> 
                                <div className="form-group">
                                     <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Agence UserName"
                                        name="UserName"
                                        value={this.state.UserName}
                                        onChange={this.onChange}
                                      />
                                </div>
                                <div className="form-group">
                                     <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        placeholder="Password Agent"
                                        name="Password"
                                        value={this.state.Password}
                                        onChange={this.onChange}
                                      />
                                </div>
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
AddAgent.propTypes = {
    errors: PropTypes.object.isRequired,
    createAgence: PropTypes.func.isRequired,
 
   };
   
   const mapStateToProps = state => ({
     errors: state.errors,
   });
   
   export default connect(mapStateToProps,
      {
       createAgent
    })(
     AddAgent
   );