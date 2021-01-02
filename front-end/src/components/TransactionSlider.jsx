import React, { Component } from "react";
import Switch from "react-switch";

class TransactionSlider extends Component {
  formatProps() {
    const { diameter, widthRatio } = this.props;
    const height = diameter + 2;
    const width = height * widthRatio;
    return { diameter, height, width };
  }

  getStyle() {
    const fontStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      fontSize: "1.5em",
      color: "white",
    };
    return fontStyle;
  }

  render() {
    const { diameter, height, width } = this.formatProps();
    const { onChange, checked } = this.props;
    const { ...fontStyle } = this.getStyle();
    const handleColour = "#d1d1d1";
    return (
      <div className="col-12">
        <label htmlFor="icon-switch">
          <Switch
            onChange={(e) => onChange(e)}
            checked={checked}
            handleDiameter={diameter}
            onHandleColor={handleColour}
            offHandleColor={handleColour}
            width={width}
            height={height}
            offColor="#ff0000"
            onColor="#009405"
            activeBoxShadow="0 0 4px 0px #ffffff"
            boxShadow="0 0 2px 4px #000000"
            uncheckedIcon={<div style={{ ...fontStyle }}>OUT</div>}
            checkedIcon={<div style={{ ...fontStyle }}>IN</div>}
          />
        </label>
      </div>
    );
  }
}

TransactionSlider.defaultProps = {
  diameter: 50,
  widthRatio: 2,
};

export default TransactionSlider;
