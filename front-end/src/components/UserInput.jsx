import React, { Component } from "react";
import StartAmount from "./StartAmount";
import TransactionForm from "./TransactionForm";

class UserInput extends Component {
  state = {
    startData: { date: "", amount: "" },
    transactions: [
      {
        id: 0,
        label: "",
        income: false,
        values: { low: 0, high: 50, expected: 25 },
        days: [],
        dayNumber: 1,
        date: new Date(1970, 1, 1),
        repeat: true,
      },
    ],
  };

  render() {
    return (
      <form>
        <div className="row mt-4 ">
          <StartAmount />
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 border">
            <TransactionForm />
          </div>
        </div>
      </form>
    );
  }
}

export default UserInput;
