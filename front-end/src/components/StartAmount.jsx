import React, { Component } from "react";
import CurrencyIncrementer from "./CurrencyIncrementer";
import "react-datepicker/dist/react-datepicker.css";
import CustomDatePicker from "./CustomDatePicker";

class StartAmount extends Component {
  render() {
    const { onMouseDown, onMouseUp, value, repeatDate } = this.props;
    return (
      <div className="col-12">
        <div className="row m-2">
          <div className="col-6" align="center">
            <h2>Start Amount and Date:</h2>
          </div>
          <div className="col-3 ">
            <CurrencyIncrementer
              value={value}
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
            />
          </div>
          <div className="col-3 " align="center">
            <CustomDatePicker
              name="repeatDate"
              date={repeatDate}
              onDateChange={this.handleDateChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default StartAmount;
