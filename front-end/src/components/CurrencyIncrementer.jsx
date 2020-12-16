import React, { Component } from "react";

class CurrencyIncrementer extends Component {
  constructor() {
    super();
    const { interval } = this.startInterval;
    this.state = {
      value: "",
      interval: interval,
      changeFactor: 1.4,
    };
    this.timer = null;
    this.updateValue = this.updateValue.bind(this);
    this.resetInterval = this.resetInterval.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  get startInterval() {
    return {
      interval: 500,
    };
  }

  resetInterval() {
    this.setState(this.startInterval);
  }

  // True if plus pressed, false if subtracting
  updateValue(event, addition) {
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
  }

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

    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    var test = Math.round(n) / multiplicator;
    return +test.toFixed(digits);
  }

  formatInput(value) {
    let formattedValue = parseFloat(value);
    return formattedValue;
  }

  stopTimer() {
    clearTimeout(this.timer);
    this.resetInterval();
  }

  onChange({ currentTarget: input }) {
    this.setState({ value: this.roundTo(input.value, 2) });
  }

  render() {
    const { value } = this.state;

    return (
      <div className="row btn-group" role="group">
        <button
          type="button"
          className="col-3 btn btn-dark"
          onMouseDown={(e) => this.updateValue(e, false)}
          onMouseUp={() => this.stopTimer()}
        >
          -
        </button>
        <input
          className="col-6 quantity text-center"
          value={value}
          onChange={(e) => this.onChange(e)}
          onBlur={(e) => this.onChange(e)}
          name="quantity"
          type="number"
          placeholder="£"
        />
        <button
          id="increment"
          type="button"
          className="col-3 btn btn-dark"
          onMouseDown={(e) => this.updateValue(e, true)}
          onMouseUp={() => this.stopTimer()}
        >
          +
        </button>
      </div>
    );
  }
}

export default CurrencyIncrementer;
