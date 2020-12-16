import React, { Component } from "react";
import StartAmount from "./StartAmount";
import Transaction from "./Transaction";

class UserInput extends Component {
  state = {
    transactions: [
      {
        id: 0,
        label: "Rent",
        income: false,
        value: 500,
        days: [],
        dayNumber: 1,
        date: new Date(1970, 1, 1),
        repeat: true,
      },
    ],
  };
  render() {
    return (
      <div>
        <div className="row mt-4">
          <StartAmount />
        </div>
        <div className="row">
          <div className="col-12">
            <Transaction />
          </div>
        </div>
      </div>
    );
  }
}

export default UserInput;
