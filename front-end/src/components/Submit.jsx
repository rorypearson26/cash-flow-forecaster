import React, { Component } from "react";

class Submit extends Component {
  getLabel(isEditForm) {
    return isEditForm ? "SAVE CHANGES" : "ADD TRANSACTION";
  }

  render() {
    const { onClick, isEditForm } = this.props;
    const label = this.getLabel(isEditForm);
    return (
      <div className="m-2">
        <hr style={{ borderColor: "white", backgroundColor: "white" }} />
        <button
          type="button"
          className="btn btn-block btn-dark "
          onClick={onClick}
        >
          {label}
        </button>
      </div>
    );
  }
}

export default Submit;
