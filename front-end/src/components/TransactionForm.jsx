import React, { Component } from "react";
import TransactionSlider from "./TransactionSlider";
import TransactionName from "./TransactionName";
import CurrencyIncrementer from "./CurrencyIncrementer";
import CustomCheck from "./CustomCheck";
import RepeatInput from "./RepeatInput";
import CustomDatePicker from "./CustomDatePicker";
import IncrementerGroup from "./IncrementerGroup";

class TransactionForm extends Component {
  constructor() {
    super();
    this.state = {
      income: false,
      label: "",
      values: { low: null, high: null, expected: null },
      repeat: true,
      repeatOnDays: true,
      days: [],
      repeatDate: "",
      oneOffDate: "",
      repeatType: "",
      repeatFreqency: "",
    };
  }

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
          <IncrementerGroup income={income} />
        </div>
        {/* <div className="col-12 m-2">
          <CurrencyIncrementer
            label="BEST"
            value={values.low}
            onMouseDown={this.updateValue}
            onMouseUp={this.stopTimer}
          />
        </div>
        <div className="col-12 m-2">
          <CurrencyIncrementer
            label="EXPECTED"
            value={values.expected}
            onMouseDown={this.updateValue}
            onMouseUp={this.stopTimer}
          />
        </div>
        <div className="col-12 m-2">
          <CurrencyIncrementer
            label="WORST"
            value={values.high}
            onMouseDown={this.updateValue}
            onMouseUp={this.stopTimer}
          />
        </div> */}
        <div className="col-12">
          <div className="row m-2">
            <div className="col-6 align-self-center">
              <CustomCheck
                key={`check${!repeat}`}
                label="ONE-OFF"
                status={!repeat}
                onClick={this.repeatClicked}
              />
            </div>
            <div className="col-6 align-self-center">
              <CustomCheck
                key={`check${repeat}`}
                label="REPEAT"
                status={repeat}
                onClick={this.repeatClicked}
              />
            </div>
          </div>
        </div>
        {repeat ? (
          <RepeatInput status={repeatOnDays} onClick={this.repeatTypeClicked} />
        ) : (
          <CustomDatePicker />
        )}
      </div>
    );
  }
}

export default TransactionForm;
