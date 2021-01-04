import React, { Component } from "react";

class Submit extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className="m-2">
        <hr style={{ borderColor: "white", backgroundColor: "white" }} />
        <button
          type="button"
          className="btn btn-block btn-dark "
          onClick={onClick}
        >
          ADD TRANSACTION
        </button>
      </div>
    );
  }
}

export default Submit;
