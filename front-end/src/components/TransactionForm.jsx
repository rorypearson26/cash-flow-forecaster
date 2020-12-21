import React, { Component } from "react";
import DaysOfWeek from "./DaysOfWeek";
import CurrencyIncrementer from "./CurrencyIncrementer";
import TransactionName from "./TransactionName";
import TransactionSlider from "./TransactionSlider";

class TransactionForm extends Component {
  render() {
    return (
      <div className="row m-2" align="center">
        <div className="col-12 m-2">
          <TransactionSlider diameter={50} widthRatio={8} />
        </div>
        <div className="col-12 m-2">
          <TransactionName />
        </div>
        <div className="col-12 m-2">
          <CurrencyIncrementer label="BEST" />
        </div>
        <div className="col-12 m-2">
          <CurrencyIncrementer label="AVERAGE" />
        </div>
        <div className="col-12 m-2">
          <CurrencyIncrementer label="WORST" />
        </div>
        <div className="col-12 m-2">
          <DaysOfWeek />
        </div>
      </div>
    );
  }
}

export default TransactionForm;
