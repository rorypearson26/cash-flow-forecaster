import React, { Component } from "react";

class CurrencyIncrementer extends Component {
  state = {};
  render() {
    return (
      <div className="row btn-group" role="group">
        <button type="button" className="col-3 btn btn-dark">
          -
        </button>
        <input
          className="col-6 quantity text-center"
          min="0"
          name="quantity"
          type="number"
        />
        <button type="button" className="col-3 btn btn-dark">
          +
        </button>
      </div>
    );
  }
}

export default CurrencyIncrementer;
