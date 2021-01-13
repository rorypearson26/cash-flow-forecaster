import React, { Component } from "react";
import TransactionCard from "./TransactionCard";

class TransactionTable extends Component {
  render() {
    const transactions = [...this.props.transactions];
    const { onDelete, onEdit } = this.props;
    return (
      // <table class="table table-striped table-dark">
      //   <thead>
      //     <tr>
      //       <th scope="col">Name</th>
      //       <th scope="col">Best</th>
      //       <th scope="col">Expected</th>
      //       <th scope="col">Worst</th>
      //       <th scope="col">Type</th>
      //       <th scope="col">Dates</th>
      //       <th scope="col"></th>
      //       <th scope="col"></th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {transactions.map((transaction, i) => (
      //       <tr key={i}>
      //         <td>{transaction.name.data}</td>
      //         <td>{`£${transaction.values[0]}`}</td>
      //         <td>{`£${transaction.values[1]}`}</td>
      //         <td>{`£${transaction.values[2]}`}</td>
      //       </tr>
      //     ))}
      //   </tbody>
      // </table>
      <div>
        {transactions.map((transaction, i) => (
          <div key={i} className="mt-2 mb-2">
            <TransactionCard
              onDelete={onDelete}
              onEdit={onEdit}
              transaction={transaction}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default TransactionTable;
