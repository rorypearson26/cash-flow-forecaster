import React, { Component } from "react";
import StartAmount from "./StartAmount";
import TransactionTable from "./TransactionTable";
import TransactionModal from "./TransactionModal";
import _ from "lodash";

class UserInput extends Component {
  state = {
    key: 0,
    show: false,
    editTransaction: null,
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

  handleEdit = (transaction) => {
    const editTransaction = _.cloneDeep(transaction);
    this.setState({ editTransaction });
    this.handleShow();
  };

  onSubmit = (transaction) => {
    let transactions = [...this.state.transactions];
    let id = transaction.id;
    console.log(`id is ${id}`);
    if (id === "") {
      let id = this.getMaxID() + 1;
      transaction.id = id;
      transactions = [...transactions, { ...transaction }];
    } else {
      let index = _.findIndex(transactions, { id });
      console.log(`index is ${index}`);

      transactions.splice(index, 1, { ...transaction });
    }
    this.setState({ transactions });
    this.handleClose();
  };

  getMaxID() {
    let transactions = [...this.state.transactions];
    let maxID = Math.max.apply(
      Math,
      transactions.map(function (t) {
        return t.id;
      })
    );
    return maxID;
  }

  getSize() {
    let size = "large";
    // if (screen.width <= 480) {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      size = "small";
    }
    return size;
  }

  handleClose = () => this.setState({ show: false, editTransaction: null });
  handleShow = () => this.setState({ show: true });

  render() {
    const { editTransaction, transactions, show, boundaryData } = this.state;
    const size = this.getSize();
    return (
      <form className="container-fluid">
        <p>{size}</p>
        {/* <div className="row mt-4 ">
          <StartAmount boundaryData={boundaryData} />
        </div> */}
        <div className="row ">
          <div className="col-md-6">
            <TransactionTable
              transactions={transactions}
              onDelete={this.handleDelete}
              onEdit={this.handleEdit}
            />
          </div>
        </div>
        <div className="row text-center">
          <div className="col-sm-12 col-md-6 ">
            <TransactionModal
              onSubmit={this.onSubmit}
              onShow={this.handleShow}
              onClose={this.handleClose}
              show={show}
              editTransaction={editTransaction}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default UserInput;
