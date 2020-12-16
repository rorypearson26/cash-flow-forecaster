import React, { Component } from "react";
import DaysOfWeek from "./DaysOfWeek";
import CurrencyIncrementer from "./CurrencyIncrementer";

class Transaction extends Component {
  state = {};
  render() {
    return (
      <div className="row m-2">
        <div className="col-4">
          <CurrencyIncrementer />
        </div>
        <div className="col-4">
          <DaysOfWeek />
        </div>
      </div>
    );
  }
}

export default Transaction;
