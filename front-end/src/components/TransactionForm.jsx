import React, { Component } from "react";
import DaysOfWeek from "./DaysOfWeek";
import CurrencyIncrementer from "./CurrencyIncrementer";
import TransactionName from "./TransactionName";

class TransactionForm extends Component {
  state = {};
  render() {
    return (
      <div className="row m-2" align="center">
        <div className="col-12">
          <input type="checkbox" checked data-toggle="toggle" data-size="lg" />
          <input type="checkbox" checked data-toggle="toggle" />
        </div>
        <div className="col-12">
          <TransactionName />
        </div>
        <div className="col-12">
          <CurrencyIncrementer />
        </div>
        <div className="col-12">
          <DaysOfWeek />
        </div>
      </div>
    );
  }
}

export default TransactionForm;
