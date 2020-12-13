import React, { Component } from "react";

class CurrencyIncrementer extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      interval: 500,
      changeFactor: 1.4,
    };
    this.timer = null;
    this.updateValue = this.updateValue.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  // True if plus pressed, false if subtracting
  updateValue(addition) {
    let { value, interval, changeFactor } = this.state;
    value = this.changeValue({ value, addition });
    this.setState({ value });
    this.timer = setTimeout(() => this.updateValue(addition), interval);
    interval = this.changeInterval(interval, changeFactor);
    this.setState({ interval });
  }

  // If addition is true, 1 is added, else 1 subtracted
  changeValue({ value, addition }) {
    return addition ? value + 1 : value - 1;
  }

  changeInterval(interval, changeFactor) {
    //Don't let update rate fall below this
    if (interval >= 1) {
      interval = Math.round(interval / changeFactor);
    }
    return interval;
  }

  stopTimer() {
    clearTimeout(this.timer);
    this.setState({ interval: 1000 });
  }

  render() {
    const { value } = this.state;

    return (
      <div className="row btn-group" role="group">
        <button
          type="button"
          className="col-3 btn btn-dark"
          onMouseDown={() => this.updateValue(false)}
          onMouseUp={() => this.stopTimer()}
        >
          -
        </button>
        <input
          className="col-6 quantity text-center"
          value={value}
          name="quantity"
          type="number"
          placeholder="£"
        />
        <button
          id="increment"
          type="button"
          className="col-3 btn btn-dark"
          onMouseDown={() => this.updateValue(true)}
          onMouseUp={() => this.stopTimer()}
        >
          +
        </button>
      </div>
    );
  }
}

export default CurrencyIncrementer;
