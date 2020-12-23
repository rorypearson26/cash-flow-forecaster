import React, { Component } from "react";

class RepeatInput extends Component {
  state = {};
  render() {
    return (
      <div className="col-12">
        <div className="row m-2">
          <select className="custom-select col-3" id="inputGroupSelect01">
            <option hidden>Every nth</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">4</option>
          </select>
          <select className="custom-select col-3" id="inputGroupSelect01">
            <option hidden>Period</option>
            <option value="1">Week</option>
            <option value="2">Month</option>
            <option value="3">Year</option>
          </select>
        </div>
      </div>
    );
  }
}

export default RepeatInput;
