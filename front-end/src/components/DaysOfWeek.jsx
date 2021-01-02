import React, { Component } from "react";

class DaysOfWeek extends Component {
  getButtonClasses(day) {
    const days = [...this.props.days];
    const index = days.indexOf(day);
    let classes = `btn btn-dark `;
    classes += days[index].active ? `active aria-pressed="true"` : ``;
    return classes;
  }

  render() {
    const days = [...this.props.days];
    const { onClick } = this.props;
    return (
      <div className="btn-group" role="group">
        {days.map((day) => (
          <button
            type="button"
            className={this.getButtonClasses(day)}
            key={day.id}
            onClick={() => onClick(day)}
          >
            <span style={{ fontSize: "0.8em" }}>{day.day}</span>
          </button>
        ))}
      </div>
    );
  }
}

export default DaysOfWeek;
