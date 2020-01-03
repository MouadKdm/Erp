import React, { Component } from "react";

class Operation extends Component {
  render() {
    const operation = this.props.operation;
    return (
      <tr>
        <td>{operation.numeroCompte}</td>
        <td>{operation.secondAccountId}</td>
        <td>{operation.type}</td>
        <td>{operation.montant}</td>
      </tr>
    );
  }
}

export default Operation;
