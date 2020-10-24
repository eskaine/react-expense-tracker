import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Balance from "./components/Balance";
import ExpenseInput from "./components/ExpenseInput";
import TransHistory from "./components/TransHistory";

export default class App extends Component {
  state = {
    transactions: []
  }

  updateTrans = (newTransaction) => {
    let transArr = [newTransaction, ...this.state.transactions];
    this.setState({ transactions: transArr });
  }

  calcBalance = () => {
    if(this.state.transactions.length > 0) {
      return this.state.transactions.reduce((total, trans) => {
        return total += trans.type === "inc" ? trans.amount : -trans.amount;
      }, 0);
    } 
    return 0;
  }

  removeTrans = (i) => {
    let transArr = [...this.state.transactions];
    transArr.splice(i, 1);
    this.setState({transactions: transArr});
  }

  render() {
    const balance = this.calcBalance();
    return (
      <div className="App">
        <Balance balance={balance} />
        <ExpenseInput balance={balance} updateTrans={this.updateTrans.bind(this)} />
        <TransHistory transactions={this.state.transactions} removeTrans={this.removeTrans.bind(this)} />
      </div>
    );
  }
}