import React, { Component } from "react";
import CustomDatePicker from "./CustomDatePicker";
import CustomCheck from "./CustomCheck";
import DaysOfWeek from "./DaysOfWeek";

class RepeatInput extends Component {
  render() {
    const { status, onClick } = this.props;
    return (
      <div>
        <div className="col-12">
          <div className="row m-2">
            <div className="col-6 align-self-center">
              <CustomCheck
                key={`repeatOnDays${!status}`}
                label="Select Days"
                status={status}
                onClick={() => onClick()}
              />
            </div>
            <div className="col-6 align-self-center">
              <CustomCheck
                key={`repeatOnDays${status}`}
                label="Select Period"
                status={!status}
                onClick={() => onClick()}
              />
            </div>
          </div>
        </div>
        {status ? (
          <DaysOfWeek />
        ) : (
          <div className="col-12">
            <div className="row ">
              <div className="col-6">
                <select className="custom-select ">
                  <option hidden>Every nth</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                </select>
              </div>
              <div className="col-6">
                <select className="custom-select  ">
                  <option hidden>Period</option>
                  <option value="W">Week</option>
                  <option value="M">Month</option>
                  <option value="Y">Year</option>
                </select>
              </div>
            </div>
            <p className="text-center m-2">starting from...</p>
            <div className="row">
              <div className="col-12">
                <CustomDatePicker />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default RepeatInput;
