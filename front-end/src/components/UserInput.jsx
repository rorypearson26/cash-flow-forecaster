import React, { Component } from "react";
import StartAmount from "./StartAmount";
import TransactionCard from "./TransactionCard";
import TransactionForm from "./TransactionForm";
import TransactionTable from "./TransactionTable";

class UserInput extends Component {
  state = {
    key: 0,
    boundaryData: { startDate: "", endDate: "", amount: "" },
    transactions: [
      {
        income: false,
        name: { data: "Rent", error: "" },
        values: [500, 525, 600],
        repeat: true,
        repeatOnDays: false,
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
        repeatType: "M",
        frequency: 1,
      },
      {
        income: true,
        name: { data: "Deliveroo", error: "" },
        values: [20, 50, 120],
        repeat: true,
        repeatOnDays: true,
        days: [
          { id: 0, day: "Mo", active: false },
          { id: 1, day: "Tu", active: true },
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

  getSize() {
    let size = "large";
    // if (screen.width <= 480) {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      size = "small";
    }
    return size;
  }

  render() {
    const { transactions } = this.state;
    const size = this.getSize();
    return (
      <form className="container-fluid">
        <p>{size}</p>
        <div className="row mt-4 ">
          <StartAmount />
        </div>
        <div className="row ">
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
