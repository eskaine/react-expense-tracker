import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";

export default class TransHistory extends Component {

    handleClick = (e) => {
        this.props.removeTrans(e.target.dataset.index);
    }

  render() {
    return (
      <Container className="no-padding mt-x" style={{ width: "50rem" }}>
        <ListGroup>
        <ListGroup.Item className="text-center" variant="primary">Transaction History</ListGroup.Item>
          {this.props.transactions.map((trans, i) => {
            console.log(trans);
          return <ListGroup.Item key={i} className="d-flex justify-content-between align-items-center" data-index={i} onClick={this.handleClick}>
              <div>{trans.description}, {trans.amount}</div>
              <Badge variant={trans.type === "inc" ? "success" : "danger"}>{trans.type}</Badge>
              </ListGroup.Item>;
          })}
        </ListGroup>
      </Container>
    );
  }
}
