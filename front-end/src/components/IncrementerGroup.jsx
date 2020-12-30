import React, { Component } from "react";
import CurrencyIncrementer from "./CurrencyIncrementer";

class IncrementerGroup extends Component {
  constructor() {
    super();
    const { interval } = this.startInterval;
    this.resetInterval = this.resetInterval.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.timer = null;
    this.state = {
      interval: interval,
      changeFactor: 1.4,
      values: [0, 50, 60],
    };
  }
  get startInterval() {
    return {
      interval: 500,
    };
  }

  stopTimer() {
    clearTimeout(this.timer);
    this.resetInterval();
  }

  resetInterval() {
    this.setState(this.startInterval);
  }

  // True if plus pressed, false if subtracting
  onMouseDown = ({ event, addition, index }) => {
    if (event.button === 0) {
      let { values, interval, changeFactor } = this.state;
      let currentValue = values[index];
      let props = { index, values, currentValue, addition };
      values = addition === 1 ? this.increasing(props) : this.decreasing(props);
      this.setState({ values });
      this.timer = setTimeout(
        () => this.onMouseDown({ event, addition, index }),
        interval
      );
      interval = this.changeInterval(interval, changeFactor);
      this.setState({ interval });
    } else {
      return;
    }
  };

  decreasing(props) {
    let { index, values, currentValue, addition } = props;
    console.log(
      `values: ${values}, index: ${index}, currentVal: ${currentValue}`
    );
    const nextIndex = index + addition;
    let newValue = currentValue + addition;

    //Update props:
    props = { ...props, currentValue: newValue, index: nextIndex };

    if (index <= 0) {
      if (newValue <= 0) {
        newValue = 0;
      }
      values[index] = newValue;
      return values;
    }
    if (newValue >= 0 && newValue <= values[nextIndex]) {
      values[index] = newValue;
      values = this.decreasing(props);
    } else if (newValue >= 0) {
      values[index] = newValue;
    }

    return values;
  }

  increasing(props) {
    let { index, values, currentValue, addition } = props;
    const nextIndex = index + addition;
    let newValue = currentValue + addition;
    //Update props:
    props = { ...props, currentValue: newValue, index: nextIndex };
    if (index >= 2) {
      values[index] = newValue;
      return values;
    }
    values[index] = newValue;
    if (newValue >= values[nextIndex]) {
      values = this.increasing(props);
    }

    return values;
  }

  changeInterval(interval, changeFactor) {
    //Don't let update rate fall below this
    const minInterval = 5;
    const newInterval = Math.round(interval / changeFactor);
    if (newInterval > minInterval) {
      return newInterval;
    }
    return minInterval;
  }

  // roundTo(n, digits) {
  //   if (digits === undefined) {
  //     digits = 0;
  //   }

  //   var multiplier = Math.pow(10, digits);
  //   n = parseFloat((n * multiplier).toFixed(11));
  //   var test = Math.round(n) / multiplier;
  //   return +test.toFixed(digits);
  // }

  stopTimer() {
    clearTimeout(this.timer);
    this.resetInterval();
  }

  render() {
    const { values } = this.state;
    const { income } = this.props;
    const index = {
      best: income ? 2 : 0,
      expected: 1,
      worst: income ? 0 : 2,
    };
    return (
      <div>
        <div className="col-12 m-2">
          <CurrencyIncrementer
            label="BEST"
            index={index.best}
            value={values[index.best]}
            onMouseDown={this.onMouseDown}
            onMouseUp={this.stopTimer}
          />
        </div>
        <div className="col-12 m-2">
          <CurrencyIncrementer
            label="EXPECTED"
            index={index.expected}
            value={values[index.expected]}
            onMouseDown={this.onMouseDown}
            onMouseUp={this.stopTimer}
          />
        </div>
        <div className="col-12 m-2">
          <CurrencyIncrementer
            label="WORST"
            index={index.worst}
            value={values[index.worst]}
            onMouseDown={this.onMouseDown}
            onMouseUp={this.stopTimer}
          />
        </div>
      </div>
    );
  }
}

export default IncrementerGroup;
