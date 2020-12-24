import React, { Component } from "react";
import DatePicker from "react-datepicker";

class CustomDatePicker extends Component {
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
      <div className="col-12">
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

export default CustomDatePicker;
