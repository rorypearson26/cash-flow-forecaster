import React, { Component } from "react";
import CurrencyIncrementer from "./CurrencyIncrementer";

class IncrementerGroup extends Component {
  state = { values: { low: null, high: null, expected: null } };

  // True if plus pressed, false if subtracting
  updateValue = (input) => {
    let { event, addition } = input;
    if (event.button === 0) {
      let { value, interval, changeFactor } = this.state;
      value = this.changeValue({ value, addition }).toFixed(2);
      this.setState({ value });
      this.timer = setTimeout(
        () => this.updateValue(event, addition),
        interval
      );
      interval = this.changeInterval(interval, changeFactor);
      this.setState({ interval });
    } else {
      return;
    }
  };

  // If addition is true, 1 is added, else 1 subtracted
  changeValue({ value, addition }) {
    let formattedValue = this.roundTo(value, 2);
    return addition ? formattedValue + 1 : formattedValue - 1;
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

  roundTo(n, digits) {
    if (digits === undefined) {
      digits = 0;
    }

    var multiplier = Math.pow(10, digits);
    n = parseFloat((n * multiplier).toFixed(11));
    var test = Math.round(n) / multiplier;
    return +test.toFixed(digits);
  }

  stopTimer() {
    clearTimeout(this.timer);
    this.resetInterval();
  }

  render() {
    const { values } = this.state;
    const { income } = this.props;
    return (
      <div>
        <div className="col-12 m-2">
          <CurrencyIncrementer
            label="BEST"
            value={income ? values.high : values.low}
            onMouseDown={this.updateValue}
            onMouseUp={this.stopTimer}
          />
        </div>
        <div className="col-12 m-2">
          <CurrencyIncrementer
            label="EXPECTED"
            value={values.expected}
            onMouseDown={this.updateValue}
            onMouseUp={this.stopTimer}
          />
        </div>
        <div className="col-12 m-2">
          <CurrencyIncrementer
            label="WORST"
            value={income ? values.low : values.high}
            onMouseDown={this.updateValue}
            onMouseUp={this.stopTimer}
          />
        </div>
      </div>
    );
  }
}

export default IncrementerGroup;
