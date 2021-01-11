import React, { Component } from "react";

class DeleteButton extends Component {
  render() {
    const { onClick, id } = this.props;
    return <i class="far fa-times-circle" onClick={() => onClick(id)}></i>;
  }
}

export default DeleteButton;
