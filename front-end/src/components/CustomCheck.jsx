import React, { Component } from "react";

class CustomCheck extends Component {
  getGeneralStyle() {
    const generalStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      color: "white",
    };
    return generalStyle;
  }

  getCheckStyle(status, generalStyle) {
    const colour = status ? "green" : "white";
    let checkStyle = {
      color: colour,
      cursor: "pointer",
    };
    checkStyle = { ...generalStyle, ...checkStyle };
    return checkStyle;
  }

  getFontStyle(generalStyle) {
    let fontStyle = {
      fontSize: "1.5em",
    };
    fontStyle = { ...fontStyle, ...generalStyle };
    return fontStyle;
  }

  render() {
    const { status, label, onClick } = this.props;
    const generalStyle = this.getGeneralStyle();
    const { ...checkStyle } = this.getCheckStyle(status, generalStyle);
    const { ...fontStyle } = this.getFontStyle(generalStyle);
    console.log(label + ":  " + status);
    return (
      <div className="col-12">
        <div className="row">
          <div className="col-8 ">
            <label style={{ ...fontStyle }}>{label}</label>
          </div>
          <div className="col-4 ">
            <div className="fa-2x">
              <span className="fa-layers fa-fw " onClick={() => onClick()}>
                <i
                  className="fas fa-circle"
                  data-fa-transform="grow-4"
                  style={{ ...generalStyle }}
                />
                <i className="fas fa-check " style={{ ...checkStyle }} />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomCheck;
