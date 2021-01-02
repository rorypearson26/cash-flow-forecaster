import React, { Component } from "react";

class DaysOfWeek extends Component {
  state = {
    days: [
      { id: 0, day: "Mo", active: false },
      { id: 1, day: "Tu", active: false },
      { id: 2, day: "We", active: false },
      { id: 3, day: "Th", active: false },
      { id: 4, day: "Fr", active: false },
      { id: 5, day: "Sa", active: false },
      { id: 6, day: "Su", active: false },
    ],
  };
  onSelect = (day) => {
    const days = [...this.state.days];
    const index = days.indexOf(day);
    days[index].active = days[index].active ? false : true;
    this.setState({ days });
  };

  getButtonClasses(day) {
    const days = [...this.state.days];
    const index = days.indexOf(day);
    let classes = `btn btn-dark `;
    classes += days[index].active ? `active aria-pressed="true"` : ``;
    return classes;
  }

  render() {
    const days = [...this.state.days];
    return (
      <div className="btn-group" role="group">
        {days.map((day) => (
          <button
            type="button"
            className={this.getButtonClasses(day)}
            key={day.id}
            onClick={() => this.onSelect(day)}
          >
            <span style={{ fontSize: "0.8em" }}>{day.day}</span>
          </button>
        ))}
      </div>
    );
  }
}

export default DaysOfWeek;
