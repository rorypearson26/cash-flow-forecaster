import React, { Component } from "react";
import DaysOfWeek from "./DaysOfWeek";

class TransactionCard extends Component {
  getDateString() {
    const {
      repeat,
      repeatOnDays,
      days,
      repeatDate,
      oneOffDate,
      repeatType,
      frequency,
    } = this.props.transaction;
    let dateString = "";
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "2-digit",
    };
    if (repeat === false) {
      dateString =
        "One-off on: " + oneOffDate.toLocaleDateString("en-UK", options);
      return dateString;
    } else {
      if (repeatOnDays === true) {
        let activeDays = DaysOfWeek.amountActive(days);
        console.log(activeDays);
        if (activeDays.length <= 1) {
          dateString = "Repeating every: " + activeDays[0].longDay;
        } else {
          dateString = "Repeating on: ";
          for (let i = 0; i < activeDays.length; i++) {
            dateString = dateString + ", " + activeDays[i].longDay;
          }
        }
      }
    }

    return dateString;
  }

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
      color: "white",
    };
    return badgeStyle;
  }

  render() {
    const { income, name, values } = this.props.transaction;
    const { ...headerStyle } = this.getHeaderStyle(income);
    const { ...badgeStyle } = this.getBadgeStyle();
    const dateString = this.getDateString();
    console.log(dateString);
    return (
      <div
        className="card bg-dark border noselect"
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
                class="badge badge-pill "
                style={{ backgroundColor: "green", ...badgeStyle }}
              >
                £{income ? values[2] : values[0]}
              </span>
            </h5>
            <h5 className="col-4 text-center">
              <span
                class="badge badge-pill "
                style={{ backgroundColor: "orange", ...badgeStyle }}
              >
                £{values[1]}
              </span>
            </h5>
            <h5 className="col-4 text-center">
              <span
                class="badge badge-pill "
                style={{ backgroundColor: "red", ...badgeStyle }}
              >
                £{income ? values[0] : values[2]}
              </span>
            </h5>
          </div>
          <div>
            <h4 className="text-center m-2" style={{ color: "white" }}>
              {dateString}
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default TransactionCard;
