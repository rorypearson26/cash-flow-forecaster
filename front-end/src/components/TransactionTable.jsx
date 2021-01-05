import React, { Component } from "react";

class TransactionTable extends Component {
  render() {
    const transactions = [...this.props.transactions];
    console.log(transactions);
    return (
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Best</th>
            <th scope="col">Expected</th>
            <th scope="col">Worst</th>
            <th scope="col">Type</th>
            <th scope="col">Dates</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, i) => (
            <tr key={i}>
              <td>{transaction.name.data}</td>
              <td>{`£${transaction.values[0]}`}</td>
              <td>{`£${transaction.values[1]}`}</td>
              <td>{`£${transaction.values[2]}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default TransactionTable;
