import React, { Component } from "react";
import DaysOfWeek from "./DaysOfWeek";
import CurrencyIncrementer from "./CurrencyIncrementer";
import TransactionName from "./TransactionName";
import TransactionSlider from "./TransactionSlider";
import CustomCheck from "./CustomCheck";
import RepeatInput from "./RepeatInput";
import CustomDatePicker from "./CustomDatePicker";

class TransactionForm extends Component {
  state = { repeat: true, repeatOnDays: true };

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
    const { repeat, repeatOnDays } = this.state;
    return (
      <div className="row m-2 noselect" align="center">
        <div className="col-12 m-2">
          <TransactionSlider diameter={60} widthRatio={2} />
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
