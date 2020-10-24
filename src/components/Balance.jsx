import React, { Component } from "react";
import Container from "react-bootstrap/Container";

export default class Balance extends Component {
  render() {
    return (
      <Container className="balance-container mt-5 mb-3" style={{ width: "50rem" }}>
        <div className="balance-label">Balance</div>
        <div className="balance-display">{this.props.balance}</div>
      </Container>
    );
  }
}
