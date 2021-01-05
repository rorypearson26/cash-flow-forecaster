import React, { Component } from "react";
import StartAmount from "./StartAmount";
import TransactionForm from "./TransactionForm";
import TransactionTable from "./TransactionTable";

class UserInput extends Component {
  state = {
    key: 0,
    boundaryData: { startDate: "", endDate: "", amount: "" },
    transactions: [
      {
        income: false,
        name: { data: "", error: "" },
        values: [0, 50, 60],
        repeat: true,
        repeatOnDays: true,
        days: [
          { id: 0, day: "Mo", active: false },
          { id: 1, day: "Tu", active: false },
          { id: 2, day: "We", active: false },
          { id: 3, day: "Th", active: false },
          { id: 4, day: "Fr", active: false },
          { id: 5, day: "Sa", active: false },
          { id: 6, day: "Su", active: false },
        ],
        repeatDate: new Date(),
        oneOffDate: new Date(),
        repeatType: "",
        frequency: "",
      },
      {
        income: false,
        name: { data: "", error: "" },
        values: [0, 50, 60],
        repeat: true,
        repeatOnDays: true,
        days: [
          { id: 0, day: "Mo", active: false },
          { id: 1, day: "Tu", active: false },
          { id: 2, day: "We", active: false },
          { id: 3, day: "Th", active: false },
          { id: 4, day: "Fr", active: false },
          { id: 5, day: "Sa", active: false },
          { id: 6, day: "Su", active: false },
        ],
        repeatDate: new Date(),
        oneOffDate: new Date(),
        repeatType: "",
        frequency: "",
      },
    ],
  };

  onSubmit = (transaction) => {
    let { transactions } = this.state;
    transactions = [...transactions, { ...transaction }];
    this.setState({ transactions });
    this.setState({ key: Math.random() });
  };

  render() {
    const { transactions } = this.state;
    return (
      <form className="container border">
        <div className="row mt-4 ">
          <StartAmount />
        </div>
        <div className="row border">
          <div className="col-12">
            <TransactionTable transactions={transactions} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 border">
            <TransactionForm onSubmit={this.onSubmit} key={this.state.key} />
          </div>
        </div>
      </form>
    );
  }
}

export default UserInput;
