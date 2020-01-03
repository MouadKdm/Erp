import React from "react";
import { Link } from "react-router-dom";

const CreateAgentButton = () => {
  return (
    <React.Fragment>
      <Link to="/addAgent" className="btn btn-info btn-dark">
        Create compte
      </Link>
    </React.Fragment>
  );
};
export default CreateAgentButton;
