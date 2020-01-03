import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../actions/securityAction";
import { toggle } from "../actions/ActionComptes";

class Header extends Component {
  logout() {
    this.props.logout();
    window.location.href = "/";
  }

  render() {
    const { validToken, user } = this.props.security;
    const { displaystate } = this.props.display;

    const userIsAuthenticated = (
      <div className="collapse navbar-collapse" id="mobile-nav">
        {displaystate ? (
          <div
            type=""
            className="navbar-toggle bg-dark"
            data-toggle="collapse"
            onClick={() => {
              console.log("click");
              this.props.toggle(displaystate);
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </div>
        ) : (
          <div
            type=""
            className="navbar-toggle bg-dark"
            data-toggle="collapse"
            onClick={() => {
              console.log("click");
              this.props.toggle(displaystate);
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </div>
        )}
        <ul className="navbar-nav mr-auto"></ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              <i className="fas fa-user-circle mr-1" />
              {user.fullName}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/logout"
              onClick={this.logout.bind(this)}
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    );

    const userIsNotAuthenticated = (
      <div className="collapse navbar-collapse " id="mobile-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li></li>
        </ul>
      </div>
    );

    let headerLinks;

    if (validToken && user) {
      headerLinks = userIsAuthenticated;
    } else {
      headerLinks = userIsNotAuthenticated;
    }

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {headerLinks}
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
  display: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  security: state.security,
  display: state.display
});

export default connect(mapStateToProps, { logout, toggle })(Header);
