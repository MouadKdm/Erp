import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";
import CreateAgenceButton from "./Project/CreateAgenceButton";
import CreateAgentButton from "./Project/CreateAgentButton";
import { connect } from "react-redux";
import { getAgence } from "../../src/actions/ActionAgence";
import { getAgent } from "../../src/actions/ActionAgent";
import PropTypes from "prop-types";
import classnames from "classnames";
import CreateAbonneButton from "./Project/CreateAbonneButton";

class Dashboard extends Component {
  componentDidMount() {
    // this.props.getAgence();
    // this.props.getAgent();
  }

  render() {
    const { agents } = this.props.agent;
    const { agences } = this.props.agence;

    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Agent</h1>
              <br />
              <div className="d-flex justify-content-around">
                <CreateAgentButton />
                <CreateAbonneButton />
              </div>
              <br />
              {agents.map(agent => (
                <ProjectItem />
              ))}
              {agences.map(agence => (
                <ProjectItem />
              ))}
              <ProjectItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  agent: PropTypes.object.isRequired,
  agence: PropTypes.object.isRequired,
  getAgent: PropTypes.func.isRequired,
  getAgence: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  agent: state.agent,
  agence: state.agence
});

export default connect(mapStateToProps, {
  getAgent,
  getAgence
})(Dashboard);
