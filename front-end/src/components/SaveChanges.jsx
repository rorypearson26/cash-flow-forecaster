import React, { Component } from "react";

class SaveChanges extends Component {
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
          SAVE CHANGES
        </button>
      </div>
    );
  }
}

export default SaveChanges;
