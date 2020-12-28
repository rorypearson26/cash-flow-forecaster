import React, { Component } from "react";
import TransactionSlider from "./TransactionSlider";
import TransactionName from "./TransactionName";
import CurrencyIncrementer from "./CurrencyIncrementer";
import CustomCheck from "./CustomCheck";
import RepeatInput from "./RepeatInput";
import CustomDatePicker from "./CustomDatePicker";

class TransactionForm extends Component {
  state = {
    income: false,
    label: "",
    values: { low: "", high: "", expected: "" },
    repeat: true,
    repeatOnDays: true,
    days: [],
    repeatDate: "",
    oneOffDate: "",
    repeatType: "",
    repeatFreqency: "",
  };

  handleIncomeTypeChange = (checked) => {
    let { income } = this.state;
    income = checked;
    console.log(income);
    this.setState({ income });
  };

  typeClicked = () => {
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
    const { repeat, repeatOnDays, income } = this.state;
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
        <div className="col-12 m-2">
          <CurrencyIncrementer label="BEST" />
        </div>
        <div className="col-12 m-2">
          <CurrencyIncrementer label="AVERAGE" />
        </div>
        <div className="col-12 m-2">
          <CurrencyIncrementer label="WORST" />
        </div>
        <div className="col-12">
          <div className="row m-2">
            <div className="col-6 align-self-center">
              <CustomCheck
                key={`check${!repeat}`}
                label="ONE-OFF"
                status={!repeat}
                onClick={this.typeClicked}
              />
            </div>
            <div className="col-6 align-self-center">
              <CustomCheck
                key={`check${repeat}`}
                label="REPEAT"
                status={repeat}
                onClick={this.typeClicked}
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
