import React, { Component } from "react";
import DaysOfWeek from "./DaysOfWeek";
import CurrencyIncrementer from "./CurrencyIncrementer";
import TransactionName from "./TransactionName";
import TransactionSlider from "./TransactionSlider";

class TransactionForm extends Component {
  render() {
    return (
      <div className="row m-2" align="center">
        <div className="col-12">
          <TransactionSlider diameter={50} widthRatio={8} />
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
