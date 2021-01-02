import React, { Component } from "react";

class TransactionName extends Component {
  render() {
    const { data, error, onChange } = this.props;
    return (
      <div className="col-12 mt-2 mb-2">
        <input
          name="name"
          type="text"
          className="form-control"
          placeholder="Transaction Name"
          defaultValue={data}
          onChange={(e) => onChange(e)}
          autocomplete="off"
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}

export default TransactionName;
