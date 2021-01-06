import React, { Component } from "react";

class TransactionCard extends Component {
  getHeaderStyle(income) {
    let headerColour = income ? "green" : "red";
    let headerStyle = { color: "white", backgroundColor: headerColour };
    return headerStyle;
  }

  getBadgeStyle() {
    let badgeStyle = {
      display: "inline-block",
      width: "70px",
      fontSize: "1.2rem",
    };
    return badgeStyle;
  }

  render() {
    const { income, name, values } = this.props.transaction;
    const { ...headerStyle } = this.getHeaderStyle(income);
    const { ...badgeStyle } = this.getBadgeStyle();
    return (
      <div
        className="card bg-dark border"
        style={{
          color: "black",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <div>
          <h4 className="card-header text-center" style={{ ...headerStyle }}>
            {name.data}
          </h4>
        </div>
        <div className="card-body">
          <div className="row">
            <h5 className="col-4 text-center">
              <span
                class="badge badge-pill badge-success "
                style={{ ...badgeStyle }}
              >
                £{income ? values[2] : values[0]}
              </span>
            </h5>
            <h5 className="col-4 text-center">
              <span
                class="badge badge-pill badge-warning"
                style={{ ...badgeStyle }}
              >
                £{values[1]}
              </span>
            </h5>
            <h5 className="col-4 text-center">
              <span
                class="badge badge-pill badge-danger"
                style={{ ...badgeStyle }}
              >
                £{income ? values[0] : values[2]}
              </span>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default TransactionCard;
