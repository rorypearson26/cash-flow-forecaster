import React, { Component } from "react";
import Switch from "react-switch";

class TransactionSlider extends Component {
  state = { checked: false };

  handleChange(checked) {
    this.setState({ checked });
  }

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
      paddingRight: "2",
    };
    return fontStyle;
  }

  render() {
    const { diameter, height, width } = this.formatProps();
    const { ...fontStyle } = this.getStyle();
    return (
      <label htmlFor="icon-switch">
        <Switch
          onChange={(e) => this.handleChange(e)}
          checked={this.state.checked}
          handleDiameter={diameter}
          width={width}
          height={height}
          offColor="#ff0000"
          onColor="#009405"
          uncheckedIcon={<div style={{ ...fontStyle }}>OUT</div>}
          checkedIcon={<div style={{ ...fontStyle }}>IN</div>}
        />
      </label>
    );
  }
}

TransactionSlider.defaultProps = {
  diameter: 50,
  widthRatio: 2,
};

export default TransactionSlider;
