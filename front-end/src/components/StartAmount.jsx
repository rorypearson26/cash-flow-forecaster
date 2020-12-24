import React, { Component } from "react";
import CurrencyIncrementer from "./CurrencyIncrementer";
import "react-datepicker/dist/react-datepicker.css";
import CustomDatePicker from "./CustomDatePicker";

class StartAmount extends Component {
  render() {
    return (
      <div className="col-12">
        <div className="row m-2">
          <div className="col-6" align="center">
            <h2>Start Amount and Date:</h2>
          </div>
          <div className="col-3 ">
            <CurrencyIncrementer />
          </div>
          <div className="col-3 " align="center">
            <CustomDatePicker />
          </div>
        </div>
      </div>
    );
  }
}

export default StartAmount;
