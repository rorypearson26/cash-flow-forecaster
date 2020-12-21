import React, { Component } from "react";

class CustomCheck extends Component {
  getStyle(status) {
    console.log(status);
    const colour = status ? "green" : "red";
    const style = {
      color: colour,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      fontSize: "2em",
    };
    return style;
  }

  render() {
    const { status, label } = this.props;
    const { ...style } = this.getStyle(status);
    return (
      <div>
        <label>{label}</label>
        <i className="fas fa-check" style={{ ...style }}></i>
      </div>
    );
  }
}

export default CustomCheck;
