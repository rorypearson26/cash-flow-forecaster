import React, { Component } from "react";
import StartAmount from "./StartAmount";
import DaysOfWeek from "./DaysOfWeek";

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
      <div className="row">
        <StartAmount />
        <DaysOfWeek />
      </div>
    );
  }
}

export default UserInput;
