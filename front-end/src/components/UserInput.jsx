import React, { Component } from "react";
import StartAmount from "./StartAmount";
import TransactionForm from "./TransactionForm";

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
      <form>
        <div className="row mt-4 ">
          <StartAmount />
        </div>
        <div className="row">
          <div className="col-6 border">
            <TransactionForm />
          </div>
        </div>
      </form>
    );
  }
}

export default UserInput;
