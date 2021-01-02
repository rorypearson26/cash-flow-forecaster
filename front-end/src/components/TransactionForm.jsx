import React, { Component } from "react";
import TransactionSlider from "./TransactionSlider";
import TransactionName from "./TransactionName";
import CustomCheck from "./CustomCheck";
import RepeatInput from "./RepeatInput";
import CustomDatePicker from "./CustomDatePicker";
import IncrementerGroup from "./IncrementerGroup";

class TransactionForm extends Component {
  constructor() {
    super();
    const { interval } = this.startInterval;
    this.timer = null;
    this.state = {
      income: false,
      label: "",
      values: [0, 50, 60],
      repeat: true,
      repeatOnDays: true,
      days: [],
      repeatDate: "",
      oneOffDate: "",
      repeatType: "",
      repeatFreqency: "",
      interval: interval,
      changeFactor: 1.4,
    };
  }
  get startInterval() {
    return {
      interval: 500,
    };
  }

  resetInterval = () => {
    this.setState(this.startInterval);
  };

  stopTimer = () => {
    clearTimeout(this.timer);
    this.resetInterval();
  };

  // True if plus pressed, false if subtracting
  onMouseDown = ({ event, addition, index, type }) => {
    if (event.button === 0 || type === "touch") {
      let { values, interval, changeFactor } = this.state;
      let currentValue = values[index];
      let props = { index, values, currentValue, addition };
      values =
        addition === 1
          ? IncrementerGroup.increasing(props)
          : IncrementerGroup.decreasing(props);
      this.setState({ values });
      this.timer = setTimeout(
        () => this.onMouseDown({ event, addition, index, type }),
        interval
      );
      interval = IncrementerGroup.changeInterval(interval, changeFactor);
      this.setState({ interval });
    } else {
      return;
    }
  };

  handleIncomeTypeChange = (checked) => {
    let { income } = this.state;
    income = checked;
    this.setState({ income });
  };

  repeatClicked = () => {
    let { repeat } = this.state;
    repeat = repeat ? false : true;
    this.setState({ repeat });
  };

  repeatTypeClicked = () => {
    let { repeatOnDays } = this.state;
    repeatOnDays = repeatOnDays ? false : true;
    console.log("HERE");
    this.setState({ repeatOnDays });
  };

  render() {
    const { repeat, repeatOnDays, income, values } = this.state;
    return (
      <div className="row m-2 noselect" align="center">
        <div className="col-12 m-2">
          <TransactionSlider
            onChange={this.handleIncomeTypeChange}
            checked={income}
            diameter={60}
            widthRatio={2}
          />
        </div>
        <div className="col-12 m-2">
          <TransactionName />
        </div>
        <div className="col-12">
          <IncrementerGroup
            income={income}
            values={values}
            onMouseDown={this.onMouseDown}
            onMouseUp={this.stopTimer}
          />
        </div>
        <div className="col-12">
          <div className="row mt-2">
            <div className="col-6">
              <CustomCheck
                key={`check${!repeat}`}
                label="ONE-OFF"
                status={!repeat}
                onClick={this.repeatClicked}
              />
            </div>
            <div className="col-6 ">
              <CustomCheck
                key={`check${repeat}`}
                label="REPEAT"
                status={repeat}
                onClick={this.repeatClicked}
              />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12">
              {repeat ? (
                <RepeatInput
                  status={repeatOnDays}
                  onClick={this.repeatTypeClicked}
                />
              ) : (
                <CustomDatePicker />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TransactionForm;
