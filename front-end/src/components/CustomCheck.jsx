import React, { Component } from "react";

class CustomCheck extends Component {
  getCheckStyle(status) {
    const colour = status ? "green" : "red";
    const fontSize = status ? "3em" : "1em";
    const checkStyle = {
      color: colour,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      fontSize: fontSize,
    };
    return checkStyle;
  }

  getFontStyle() {
    const fontStyle = {
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      fontSize: "1em",
    };
    return fontStyle;
  }

  render() {
    const { status, label } = this.props;
    const { ...checkStyle } = this.getCheckStyle(status);
    const { ...fontStyle } = this.getFontStyle();
    return (
      <div className="col-12">
        <div className="row">
          <div className="col-6 ">
            <label style={{ ...fontStyle }}>{label}</label>
          </div>
          <div className="col-6 ">
            <i className="fas fa-check " style={{ ...checkStyle }}></i>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomCheck;
