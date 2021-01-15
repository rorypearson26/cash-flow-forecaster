import React, { Component } from "react";
import TransactionForm from "./TransactionForm";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class TransactionModal extends Component {
  render() {
    const { show, onShow, onClose, onSubmit, editTransaction } = this.props;
    return (
      <>
        <Button variant="primary" onClick={onShow}>
          Add Transaction
        </Button>

        <Modal
          show={show}
          onHide={onClose}
          backdrop="true"
          keyboard={false}
          style={{ color: "black" }}
        >
          <Modal.Header style={{ alignItems: "center" }} closeButton>
            <Modal.Title>
              {editTransaction ? "EDIT TRANSACTION" : "ADD TRANSACTION"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TransactionForm
              onSubmit={onSubmit}
              editTransaction={editTransaction}
            />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default TransactionModal;
