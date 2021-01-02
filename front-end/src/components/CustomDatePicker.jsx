import React, { Component } from "react";
import DatePicker from "react-datepicker";

class CustomDatePicker extends Component {
  render() {
    const { name, date, onDateChange } = this.props;
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
          value={date}
          selected={date}
          dateFormat="dd/MM/yyyy"
          customInput={<CustomDateButton />}
          onChange={(date) => onDateChange({ date, name })}
        />
      </div>
    );
  }
}

export default CustomDatePicker;
