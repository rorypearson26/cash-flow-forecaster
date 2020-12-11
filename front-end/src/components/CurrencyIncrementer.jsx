import React, { Component } from "react";

class CurrencyIncrementer extends Component {
  // state = { value: 50 };

  constructor() {
    super();
    this.state = {
      value: 0,
    };
    this.timer = null;
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  addOne() {
    this.setState({ value: this.state.value + 1 });
    this.timer = setTimeout(this.addOne, 50);
  }

  minusOne() {
    this.setState({ value: this.state.value - 1 });
    this.timer = setTimeout(this.minusOne, 500);
  }

  stopTimer() {
    clearTimeout(this.timer);
  }

  render() {
    const { value } = this.state;

    return (
      <div className="row btn-group" role="group">
        <button
          type="button"
          className="col-3 btn btn-dark"
          onMouseDown={this.minusOne}
          onMouseUp={this.stopTimer}
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
          onMouseDown={this.addOne}
          onMouseUp={this.stopTimer}
        >
          +
        </button>
      </div>
    );
  }
}

export default CurrencyIncrementer;
