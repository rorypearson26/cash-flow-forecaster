import React, { Component } from "react";
import DatePicker from "react-datepicker";
import CurrencyIncrementer from "./CurrencyIncrementer";
import "react-datepicker/dist/react-datepicker.css";

class StartAmount extends Component {
  state = { startAmount: 0, startDate: "" };

  componentDidMount() {
    var startDate = new Date();
    this.setState({ startDate });
  }

  setStartDate(date) {
    const startDate = date;
    this.setState({ startDate });
  }

  render() {
    const { startDate } = this.state;
    const CustomDateButton = ({ value, onClick }) => (
      <button
        type="button"
        className="btn btn-block btn-dark "
        onClick={onClick}
      >
        {value}
      </button>
    );

    return (
      <div>
        <div className="row m-2 text-center">
          <h2>Start Amount and Date</h2>
        </div>
        <div className="row m-2">
          <div className="col-8 ">
            <CurrencyIncrementer />
          </div>
          <div className="col-4 " align="center">
            <DatePicker
              value={startDate}
              selected={startDate}
              dateFormat="dd/MM/yyyy"
              customInput={<CustomDateButton />}
              onChange={(date) => this.setStartDate(date)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default StartAmount;
