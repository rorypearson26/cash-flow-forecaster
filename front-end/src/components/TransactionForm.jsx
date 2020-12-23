import React, { Component } from "react";
import DaysOfWeek from "./DaysOfWeek";
import CurrencyIncrementer from "./CurrencyIncrementer";
import TransactionName from "./TransactionName";
import TransactionSlider from "./TransactionSlider";
import CustomCheck from "./CustomCheck";

class TransactionForm extends Component {
  state = { repeat: true };

  typeClicked = () => {
    let { repeat } = this.state;
    repeat = repeat ? false : true;
    this.setState({ repeat });
  };

  render() {
    const { repeat } = this.state;
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
          <div className="row ">
            <div className="col-6 align-self-center">
              <CustomCheck
                key={`check${!repeat}`}
                label="one-off"
                status={!repeat}
                onClick={this.typeClicked}
              />
            </div>
            <div className="col-6 align-self-center">
              <CustomCheck
                key={`check${repeat}`}
                label="repeat"
                status={repeat}
                onClick={this.typeClicked}
              />
            </div>
          </div>
        </div>

        <div className="col-12 m-2">
          <DaysOfWeek />
        </div>
      </div>
    );
  }
}

export default TransactionForm;
