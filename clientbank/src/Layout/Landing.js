import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/css/header.css";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="light-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Demande chequier</h1>
                <hr />
                <Link className="btn btn-lg btn-dark  mr-2" to="/login">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
