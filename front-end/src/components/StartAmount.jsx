import React, { Component } from "react";
import DatePicker from "react-datepicker";
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
    const { startAmount, startDate } = this.state;
    const CustomDateButton = ({ value, onClick }) => (
      <button
        type="button"
        className="btn btn-outline-dark m-2"
        onClick={onClick}
      >
        {value}
      </button>
    );

    return (
      <div>
        <span className="badge badge-pill badge-primary">£{startAmount}</span>
        <DatePicker
          value={startDate}
          selected={startDate}
          dateFormat="dd/MM/yyyy"
          customInput={<CustomDateButton />}
          onChange={(date) => this.setStartDate(date)}
        />
      </div>
    );
  }
}

export default StartAmount;
