import React from "react";
import { Link } from "react-router-dom";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from "mdbreact";

const RechargeButton = () => {
  return (
    <React.Fragment>
      <br />
      <link
        href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
        rel="stylesheet"
      ></link>
      <MDBListGroup>
        <a href="/Transaction">
          <MDBListGroupItem className="text-light bg-dark border border-dark">
            <MDBIcon icon="home" fixed />
            Virement
          </MDBListGroupItem>
        </a>
        <p className="text-light">_____________________________</p>

        <a href="/Recharge">
          <MDBListGroupItem className="text-light bg-dark border border-dark">
            <MDBIcon icon="book" fixed />
            Recharge
          </MDBListGroupItem>
        </a>
        <p className="text-light">_____________________________</p>
        <MDBListGroupItem className="text-light bg-dark border border-dark">
          <MDBIcon icon="cog" fixed /> My account
        </MDBListGroupItem>
      </MDBListGroup>
    </React.Fragment>
  );
};

export default RechargeButton;
