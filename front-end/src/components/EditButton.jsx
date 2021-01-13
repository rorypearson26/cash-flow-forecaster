import React, { Component } from "react";

class EditButton extends Component {
  render() {
    const { onClick, transaction, style } = this.props;
    return (
      <span onClick={() => onClick(transaction)}>
        <i className="fas fa-edit" style={{ ...style }}></i>
      </span>
    );
  }
}

export default EditButton;
