import React, { Component } from "react";

class CurrencyIncrementer extends Component {
  constructor() {
    super();
    const { interval } = this.startInterval;
    this.resetInterval = this.resetInterval.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.timer = null;
    this.state = { interval: interval, changeFactor: 1.4 };
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

  render() {
    const { label, value, onMouseDown } = this.props;

    return (
      <div>
        {label === false ? null : <label>{label}</label>}
        <div className="row btn-group" role="group">
          <button
            type="button"
            className="col-3 btn btn-dark"
            onMouseDown={(e) => onMouseDown({ event: e, addition: false })}
            onMouseUp={() => this.stopTimer()}
          >
            -
          </button>
          <input
            className="col-6 quantity text-center noselect"
            readonly="readOnly"
            value={value}
            name="quantity"
            type="number"
            placeholder="£"
          />
          <button
            id="increment"
            type="button"
            className="col-3 btn btn-dark"
            onMouseDown={(e) => onMouseDown({ event: e, addition: true })}
            onMouseUp={() => this.stopTimer()}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

CurrencyIncrementer.defaultProps = { label: false };
export default CurrencyIncrementer;
