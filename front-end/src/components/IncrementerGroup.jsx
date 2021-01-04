import React, { Component } from "react";
import CurrencyIncrementer from "./CurrencyIncrementer";

class IncrementerGroup extends Component {
  //Return false if all values are left at 0
  static validateValues(values) {
    for (let i = 0; i < values.length; i++) {
      if (values[i] > 0) {
        return true;
      }
    }
    return false;
  }

  static decreasing(props) {
    let { index, values, currentValue, addition } = props;
    const nextIndex = index + addition;
    let newValue = currentValue + addition * 5;

    //Update props:
    props = { ...props, currentValue: newValue, index: nextIndex };

    if (index <= 0) {
      if (newValue <= 0) {
        newValue = 0;
      }
      values[index] = newValue;
      return values;
    }
    if (newValue >= 0 && newValue <= values[nextIndex]) {
      values[index] = newValue;
      values = this.decreasing(props);
    } else if (newValue >= 0) {
      values[index] = newValue;
    }

    return values;
  }

  static increasing(props) {
    let { index, values, currentValue, addition } = props;
    const nextIndex = index + addition;
    let newValue = currentValue + addition * 5;
    //Update props:
    props = { ...props, currentValue: newValue, index: nextIndex };
    if (index >= 2) {
      values[index] = newValue;
      return values;
    }
    values[index] = newValue;
    if (newValue >= values[nextIndex]) {
      values = this.increasing(props);
    }

    return values;
  }

  static changeInterval(interval, changeFactor) {
    //Don't let update rate fall below this
    const minInterval = 1;
    const newInterval = Math.round(interval / changeFactor);
    if (newInterval > minInterval) {
      return newInterval;
    }
    return minInterval;
  }

  render() {
    const { income, values, onMouseDown, onMouseUp } = this.props;
    const index = {
      best: income ? 2 : 0,
      expected: 1,
      worst: income ? 0 : 2,
    };
    return (
      <div className="col-12">
        <div className="row m-2">
          <div className="col-12 ">
            <CurrencyIncrementer
              label="BEST"
              index={index.best}
              value={values[index.best]}
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
            />
          </div>
        </div>
        <div className="row m-2">
          <div className="col-12 ">
            <CurrencyIncrementer
              label="EXPECTED"
              index={index.expected}
              value={values[index.expected]}
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
            />
          </div>
        </div>
        <div className="row m-2">
          <div className="col-12">
            <CurrencyIncrementer
              label="WORST"
              index={index.worst}
              value={values[index.worst]}
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default IncrementerGroup;
