import React, { Component } from "react";

class DaysOfWeek extends Component {
  getButtonClasses(day) {
    const days = [...this.props.days];
    const index = days.indexOf(day);
    let classes = `btn btn-dark `;
    classes += days[index].active ? `active aria-pressed="true"` : ``;
    return classes;
  }

  // Reset all days to false
  static resetDays = (days) => {
    for (let i = 0; i < days.length; i++) {
      days[i]["active"] = false;
    }
    return days;
  };

  // Return true if at least one day is active
  static checkActive(days) {
    for (let i = 0; i < days.length; i++) {
      if (days[i]["active"] === true) {
        return true;
      }
    }
    return false;
  }

  render() {
    const days = [...this.props.days];
    const { onClick } = this.props;
    return (
      <div className="btn-group special" role="group">
        {days.map((day) => (
          <button
            type="button"
            className={this.getButtonClasses(day)}
            key={day.id}
            onClick={() => onClick(day)}
          >
            <span style={{ fontSize: "80%" }}>{day.day}</span>
          </button>
        ))}
      </div>
    );
  }
}

export default DaysOfWeek;
