import React, { Component } from "react";
import CustomDatePicker from "./CustomDatePicker";

class RepeatInput extends Component {
  state = {};
  render() {
    return (
      <div className="col-12">
        <div className="row border ">
          <select className="custom-select border col-md-6 ">
            <option hidden>Every nth</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
          </select>
          <select className="custom-select border col-md-6 ">
            <option hidden>Period</option>
            <option value="W">Week</option>
            <option value="M">Month</option>
            <option value="Y">Year</option>
          </select>
        </div>
        <p className="text-center m-2">starting from...</p>
        <div className="row border">
          <div className="col-12">
            <CustomDatePicker />
          </div>
        </div>
      </div>
    );
  }
}

export default RepeatInput;
