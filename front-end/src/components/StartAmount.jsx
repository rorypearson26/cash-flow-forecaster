import React, { Component } from "react";
import CurrencyIncrementer from "./CurrencyIncrementer";
import "react-datepicker/dist/react-datepicker.css";
import CustomDatePicker from "./CustomDatePicker";

class StartAmount extends Component {
  constructor(props) {
    super(props);
    const { interval } = this.startInterval;
    this.timer = null;
    this.state = {
      interval: interval,
      changeFactor: 1.4,
      changeAmount: { value: 1, loop: 0 },
    };
  }

  get startInterval() {
    return {
      interval: 500,
    };
  }

  resetInterval = () => {
    this.setState(this.startInterval);
  };

  onMouseUp = (e = null) => {
    const changeAmount = { value: 1, loop: 0 };
    clearTimeout(this.timer);
    this.resetInterval();
    this.setState({ changeAmount });
    if (e !== null) {
      e.preventDefault();
    }
  };

  // True if plus pressed, false if subtracting
  onMouseDown = ({ event, addition, index, type }) => {
    if (event.button === 0 || type === "touch") {
      let { interval, changeFactor, changeAmount } = this.state;
      let { onChange } = this.props;
      let { boundaryData } = this.props;
      boundaryData.value = boundaryData.value + addition * changeAmount.value;
      if (boundaryData.value <= 0) {
        boundaryData.value = 0;
      }
      onChange(boundaryData); //call set state above
      this.timer = setTimeout(
        () => this.onMouseDown({ event, addition, index, type }),
        interval
      );
      this.setState({ changeAmount: this.changeAmount(changeAmount) });
      interval = this.changeInterval(interval, changeFactor);
      this.setState({ interval });
    } else {
      return;
    }
  };
  changeAmount() {
    let { changeAmount } = this.state;

    if (changeAmount.loop < 100) {
      if (changeAmount.loop >= 50) {
        changeAmount.value = 49;
      }
      if (changeAmount.loop < 50) {
        changeAmount.value = 5;
      }
      if (changeAmount.loop < 20) {
        changeAmount.value = 2;
      }
      if (changeAmount.loop < 5) {
        changeAmount.value = 1;
      }
      changeAmount.loop++;
    }
    return changeAmount;
  }
  changeInterval(interval, changeFactor) {
    //Don't let update rate fall below this
    const minInterval = 1;
    const newInterval = Math.round(interval / changeFactor);
    if (newInterval > minInterval) {
      return newInterval;
    }
    return minInterval;
  }

  handleDateChange = ({ date, name }) => {
    const { boundaryData, onChange } = this.props;
    const startDate = date;
    boundaryData[name] = startDate;
    onChange(boundaryData);
  };

  render() {
    const { boundaryData } = this.props;
    const { startDate, endDate, value } = boundaryData;
    return (
      <div className="col-12">
        <div className="row m-2">
          <div className="col-6" align="center">
            <h2>Start Amount:</h2>
          </div>
          <div className="col-6 ">
            <CurrencyIncrementer
              value={value}
              onMouseDown={this.onMouseDown}
              onMouseUp={this.onMouseUp}
            />
          </div>
          <div className="col-6" align="center">
            <h2>Date Range:</h2>
          </div>
          <div className="col-3 " align="center">
            <CustomDatePicker
              name="startDate"
              date={startDate}
              onDateChange={this.handleDateChange}
              selectsStart
              startDate={startDate}
              endDate={endDate}
            />
          </div>
          <div className="col-3 " align="center">
            <CustomDatePicker
              name="endDate"
              date={endDate}
              onDateChange={this.handleDateChange}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default StartAmount;
