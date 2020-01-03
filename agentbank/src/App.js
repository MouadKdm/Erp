import React, { Component } from "react";
import "./App.css";
import Dashboard from "./Component/Dashboard";
import Header from "./Component/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddAgence from "./Component/Project/AddAgence";
import AddAgent from "./Component/Project/AddAgent";
import { Provider } from "react-redux";
import store from "./store";
import AddAbonne from "./Component/Project/AddAbonne";
import AddCompte from "./Component/Project/AddCompte";
import AddContract from "./Component/Project/AddContract";
import AddCarte from "./Component/Project/AddCarte";
import Login from "./Component/Layout/Login";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />

            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addAgence" component={AddAgence} />
            <Route exact path="/addAgent" component={AddAgent} />
            <Route exact path="/addAbonne" component={AddAbonne} />
            <Route exact path="/addContract" component={AddContract} />
            <Route exact path="/addCompte" component={AddCompte} />
            <Route exact path="/addCarte" component={AddCarte} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
