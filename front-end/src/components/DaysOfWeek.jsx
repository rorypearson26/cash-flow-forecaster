import React, { Component } from "react";

class DaysOfWeek extends Component {
  state = {
    days: [
      { id: 0, day: "Mon", active: "" },
      { id: 1, day: "Tue", active: "" },
      { id: 2, day: "Wed", active: "" },
      { id: 3, day: "Thu", active: "" },
      { id: 4, day: "Fri", active: "" },
      { id: 5, day: "Sat", active: "" },
      { id: 6, day: "Sun", active: "" },
    ],
  };
  onSelect = (props) => {
    let { days } = this.state;
    console.log(props);
  };

  render() {
    const { days } = this.state;
    return (
      <div className="btn-group" role="group">
        {days.map((day) => (
          <button
            type="button"
            className="btn  btn-dark"
            key={day.id}
            onClick={(e) => this.onSelect(e.target.day)}
          >
            {day.day}
          </button>
        ))}
      </div>
    );
  }
}

export default DaysOfWeek;
