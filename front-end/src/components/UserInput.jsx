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
        id: 0,
        income: false,
        name: { data: "Rent", error: "" },
        values: [500, 525, 600],
        repeat: true,
        repeatOnDays: false,
        days: [
          { id: 0, day: "Mo", longDay: "Monday", active: false },
          { id: 1, day: "Tu", longDay: "Tuesday", active: false },
          { id: 2, day: "We", longDay: "Wednesday", active: false },
          { id: 3, day: "Th", longDay: "Thursday", active: false },
          { id: 4, day: "Fr", longDay: "Friday", active: false },
          { id: 5, day: "Sa", longDay: "Saturday", active: false },
          { id: 6, day: "Su", longDay: "Sunday", active: false },
        ],
        repeatDate: new Date(),
        oneOffDate: new Date(),
        repeatType: { short: "M", long: "Month" },
        frequency: 1,
      },
      {
        id: 1,
        income: false,
        name: { data: "Car Insurance", error: "" },
        values: [450, 600, 900],
        repeat: false,
        repeatOnDays: true,
        days: [
          { id: 0, day: "Mo", longDay: "Monday", active: false },
          { id: 1, day: "Tu", longDay: "Tuesday", active: true },
          { id: 2, day: "We", longDay: "Wednesday", active: false },
          { id: 3, day: "Th", longDay: "Thursday", active: false },
          { id: 4, day: "Fr", longDay: "Friday", active: false },
          { id: 5, day: "Sa", longDay: "Saturday", active: false },
          { id: 6, day: "Su", longDay: "Sunday", active: false },
        ],
        repeatDate: new Date(),
        oneOffDate: new Date(2020, 11, 11),
        repeatType: { short: "", long: "" },
        frequency: "",
      },
      {
        id: 2,
        income: true,
        name: { data: "Deliveroo extension onto the next line", error: "" },
        values: [20, 50, 120],
        repeat: true,
        repeatOnDays: true,
        days: [
          { id: 0, day: "Mo", longDay: "Monday", active: true },
          { id: 1, day: "Tu", longDay: "Tuesday", active: true },
          { id: 2, day: "We", longDay: "Wednesday", active: false },
          { id: 3, day: "Th", longDay: "Thursday", active: true },
          { id: 4, day: "Fr", longDay: "Friday", active: false },
          { id: 5, day: "Sa", longDay: "Saturday", active: false },
          { id: 6, day: "Su", longDay: "Sunday", active: false },
        ],
        repeatDate: new Date(),
        oneOffDate: new Date(),
        repeatType: { short: "", long: "" },
        frequency: "",
      },
    ],
  };

  handleDelete = (transactionID) => {
    const transactions = this.state.transactions.filter(
      (t) => t.id !== transactionID
    );
    this.setState({ transactions });
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
            <TransactionTable
              transactions={transactions}
              onDelete={this.handleDelete}
            />
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
