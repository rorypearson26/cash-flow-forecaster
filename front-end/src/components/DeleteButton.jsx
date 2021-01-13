import React, { Component } from "react";

class DeleteButton extends Component {
  render() {
    const { onClick, id, style } = this.props;
    return (
      <span onClick={() => onClick(id)}>
        <i className="far fa-times-circle" style={{ ...style }}></i>
      </span>
    );
  }
}

export default DeleteButton;
