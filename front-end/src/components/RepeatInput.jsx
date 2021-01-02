import React, { Component } from "react";
import CustomDatePicker from "./CustomDatePicker";
import CustomCheck from "./CustomCheck";
import DaysOfWeek from "./DaysOfWeek";

class RepeatInput extends Component {
  render() {
    const {
      status,
      days,
      onClick,
      onDaysSelect,
      onDateChange,
      name,
      date,
      repeatType,
      frequency,
      handleFrequencyChange,
      handleRepTypeChange,
    } = this.props;

    return (
      <div>
        <div className="row mb-2">
          <div className="col-6">
            <CustomCheck
              key={`repeatOnDays${!status}`}
              label="DAYS"
              status={status}
              onClick={() => onClick()}
            />
          </div>
          <div className="col-6 ">
            <CustomCheck
              key={`repeatOnDays${status}`}
              label="PERIOD"
              status={!status}
              onClick={() => onClick()}
            />
          </div>
        </div>
        {status ? (
          <div className="row">
            <div className="col-12 ">
              <DaysOfWeek days={days} onClick={onDaysSelect} />
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-6">
              <select
                value={frequency}
                className="custom-select "
                onChange={(e) => handleFrequencyChange(e)}
              >
                <option hidden>Every nth</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
              </select>
            </div>
            <div className="col-6">
              <select
                value={repeatType}
                className="custom-select "
                onChange={(e) => handleRepTypeChange(e)}
              >
                <option hidden>Period</option>
                <option value="W">{`Week${frequency > 1 ? "s" : ""}`}</option>
                <option value="M">{`Month${frequency > 1 ? "s" : ""}`}</option>
                <option value="Y">{`Year${frequency > 1 ? "s" : ""}`}</option>
              </select>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="text-center m-2">starting from...</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <CustomDatePicker
                  name={name}
                  date={date}
                  onDateChange={onDateChange}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default RepeatInput;
