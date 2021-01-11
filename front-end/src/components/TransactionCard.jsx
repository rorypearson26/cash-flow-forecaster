import React, { Component } from "react";
import DaysOfWeek from "./DaysOfWeek";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

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
            if (i === activeDays.length - 1) {
              dateString = dateString + " and " + activeDays[i].longDay;
            } else if (i === 0) {
              dateString = dateString + activeDays[i].longDay;
            } else {
              dateString = dateString + ", " + activeDays[i].longDay;
            }
          }
        }
      } else {
        dateString = `Repeating every ${frequency} ${
          repeatType.long
        } from ${repeatDate.toLocaleDateString("en-UK", options)} `;
      }
    }

    return dateString;
  }

  getHeaderStyle(income) {
    let headerColour = income ? "green" : "red";
    let headerStyle = { color: "white", backgroundColor: headerColour };
    return headerStyle;
  }

  getFooterStyle() {
    let headerStyle = { color: "white", backgroundColor: "DarkSlateGray" };
    return headerStyle;
  }

  getBadgeStyle() {
    let badgeStyle = {
      display: "inline-block",
      width: "80px",
      fontSize: "1.2rem",
      color: "white",
    };
    return badgeStyle;
  }

  getButtonStyle() {
    const buttonStyle = { color: "white", fontSize: "2rem", cursor: "pointer" };
    return buttonStyle;
  }

  render() {
    const { income, name, values, id } = this.props.transaction;
    const { onDelete, key } = this.props;
    const { ...headerStyle } = this.getHeaderStyle(income);
    const { ...footerStyle } = this.getFooterStyle(income);
    const { ...badgeStyle } = this.getBadgeStyle();
    const { ...buttonStyle } = this.getButtonStyle();

    const dateString = this.getDateString();
    return (
      <div
        className="card bg-dark border-10 noselect"
        style={{
          color: "black",
          borderRadius: "10px",
          borderWidth: "0.5rem",
          overflow: "hidden",
        }}
      >
        <div>
          <h5 className="card-header text-center" style={{ ...headerStyle }}>
            <div className="row ">
              <div className="col-2 my-auto" style={{ ...buttonStyle }}>
                <EditButton />
              </div>
              <div className="col-8 my-auto">{name.data}</div>
              <div className="col-2 my-auto" style={{ ...buttonStyle }}>
                <DeleteButton onClick={() => onDelete()} id={id} />
              </div>
            </div>
          </h5>
        </div>
        <div className="card-body">
          <div className="row" style={{ color: "white" }}>
            <h5 className="col-4 text-center">Best</h5>
            <h5 className="col-4 text-center">Expected</h5>
            <h5 className="col-4 text-center">Worst</h5>
          </div>
          <div className="row">
            <h5 className="col-4 text-center">
              <span
                class="badge "
                style={{ backgroundColor: "green", ...badgeStyle }}
              >
                £{income ? values[2] : values[0]}
              </span>
            </h5>
            <h5 className="col-4 text-center">
              <span
                class="badge "
                style={{ backgroundColor: "orange", ...badgeStyle }}
              >
                £{values[1]}
              </span>
            </h5>
            <h5 className="col-4 text-center">
              <span
                class="badge"
                style={{ backgroundColor: "red", ...badgeStyle }}
              >
                £{income ? values[0] : values[2]}
              </span>
            </h5>
          </div>
        </div>
        <div className="card-footer " style={{ ...footerStyle }}>
          <h5 className="text-center m-1">{dateString}</h5>
        </div>
      </div>
    );
  }
}

export default TransactionCard;
