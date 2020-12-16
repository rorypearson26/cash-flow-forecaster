import React, { Component } from "react";

class TransactionName extends Component {
  state = {};
  render() {
    return (
      <div className="form-group row">
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Transaction Name"
          />
        </div>
      </div>
    );
  }
}

export default TransactionName;
