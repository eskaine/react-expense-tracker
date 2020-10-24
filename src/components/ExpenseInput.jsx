import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default class ExpenseInput extends Component {
  state = {
    amount: "",
    description: ""
  };

  changeHandler = (e) => {
    this.setState({[e.target.dataset.type]: e.target.value});
  }

  expenseHandler = (e) => {
    if(this.state.amount > 0 && this.state.amount !== "") {
      if(this.state.amount > this.props.balance && e.target.dataset.type === "exp") {
        return;
      }

      let newTransaction = {
        type: e.target.dataset.type,
        amount: Number(this.state.amount),
        description: this.state.description
      };
      this.props.updateTrans(newTransaction);
      this.setState({ amount: "", description: "" });
    }
  }

  render() {
    return (
      <Container className="input-container no-padding" style={{ width: "50rem" }}>
        <input className="input-box" type="number" data-type="amount"placeholder="0" onChange={this.changeHandler} value={this.state.amount}/>
        <input className="input-box" type="text" data-type="description" placeholder="Description" onChange={this.changeHandler} value={this.state.description}/>
        <Button className="btn-text" data-type="inc" variant="success" onClick={this.expenseHandler}>Income</Button>
        <Button className="btn-text" data-type="exp" variant="danger" onClick={this.expenseHandler}>Expense</Button>
      </Container>
    );
  }
}
