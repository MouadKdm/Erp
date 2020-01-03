import React from "react";
import { Link } from "react-router-dom";

const RechargeButton = () => {
  return (
    <React.Fragment>
      <Link to="/Recharge" className="btn btn-lg btn btn-outline-dark ">
        Recharge
      </Link>
    </React.Fragment>
  );
};

export default RechargeButton;
