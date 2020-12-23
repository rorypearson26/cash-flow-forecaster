import React, { Component } from "react";

class DaysOfWeek extends Component {
  state = {
    days: [
      { id: 0, day: "Mon", active: false },
      { id: 1, day: "Tue", active: false },
      { id: 2, day: "Wed", active: false },
      { id: 3, day: "Thu", active: false },
      { id: 4, day: "Fri", active: false },
      { id: 5, day: "Sat", active: false },
      { id: 6, day: "Sun", active: false },
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
      <div className="col-12">
        <div className="btn-group" role="group">
          {days.map((day) => (
            <button
              type="button"
              className={this.getButtonClasses(day)}
              key={day.id}
              onClick={() => this.onSelect(day)}
            >
              {day.day}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default DaysOfWeek;
