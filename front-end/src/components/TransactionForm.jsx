import React, { Component } from "react";
import TransactionSlider from "./TransactionSlider";
import TransactionName from "./TransactionName";
import CustomCheck from "./CustomCheck";
import RepeatInput from "./RepeatInput";
import CustomDatePicker from "./CustomDatePicker";
import IncrementerGroup from "./IncrementerGroup";
import Joi from "joi-browser";

class TransactionForm extends Component {
  constructor() {
    super();
    const { interval } = this.startInterval;
    this.timer = null;
    this.state = {
      income: false,
      name: { data: "", error: "" },
      values: [0, 50, 60],
      repeat: true,
      repeatOnDays: true,
      days: [
        { id: 0, day: "Mo", active: false },
        { id: 1, day: "Tu", active: false },
        { id: 2, day: "We", active: false },
        { id: 3, day: "Th", active: false },
        { id: 4, day: "Fr", active: false },
        { id: 5, day: "Sa", active: false },
        { id: 6, day: "Su", active: false },
      ],
      repeatDate: new Date(),
      oneOffDate: new Date(),
      repeatType: "",
      frequency: "",
      interval: interval,
      changeFactor: 1.4,
    };
  }

  schema = {
    name: Joi.string().min(3).max(30).required(),
  };

  get startInterval() {
    return {
      interval: 500,
    };
  }

  handleDateChange = ({ date, name }) => {
    const startDate = date;
    this.setState({ [name]: startDate });
  };

  handleDaysSelect = (day) => {
    const days = [...this.state.days];
    const index = days.indexOf(day);
    days[index].active = days[index].active ? false : true;
    this.setState({ days });
  };

  handleNameChange = ({ currentTarget: input }) => {
    const { name } = this.state;
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      name.error = errorMessage;
    } else {
      delete name.error;
      name.data = input.value;
    }
    this.setState({ name });
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  resetInterval = () => {
    this.setState(this.startInterval);
  };

  stopTimer = () => {
    clearTimeout(this.timer);
    this.resetInterval();
  };

  // True if plus pressed, false if subtracting
  onMouseDown = ({ event, addition, index, type }) => {
    if (event.button === 0 || type === "touch") {
      let { values, interval, changeFactor } = this.state;
      let currentValue = values[index];
      let props = { index, values, currentValue, addition };
      values =
        addition === 1
          ? IncrementerGroup.increasing(props)
          : IncrementerGroup.decreasing(props);
      this.setState({ values });
      this.timer = setTimeout(
        () => this.onMouseDown({ event, addition, index, type }),
        interval
      );
      interval = IncrementerGroup.changeInterval(interval, changeFactor);
      this.setState({ interval });
    } else {
      return;
    }
  };

  handleIncomeTypeChange = (checked) => {
    let { income } = this.state;
    income = checked;
    this.setState({ income });
  };

  repeatClicked = () => {
    let { repeat } = this.state;
    repeat = repeat ? false : true;
    this.setState({ repeat });
  };

  repeatTypeClicked = () => {
    let { repeatOnDays } = this.state;
    repeatOnDays = repeatOnDays ? false : true;
    console.log("HERE");
    this.setState({ repeatOnDays });
  };

  handleFrequencyChange = (e) => {
    const frequency = parseInt(e.target.value);
    this.setState({ frequency });
  };

  handleRepTypeChange = (e) => {
    const repeatType = e.target.value;
    this.setState({ repeatType });
  };

  render() {
    const {
      days,
      oneOffDate,
      repeatDate,
      repeat,
      repeatType,
      frequency,
      repeatOnDays,
      income,
      values,
    } = this.state;
    const { data, error } = this.state.name;
    return (
      <div className="row m-2 noselect" align="center">
        <TransactionSlider
          onChange={this.handleIncomeTypeChange}
          checked={income}
          diameter={60}
          widthRatio={3}
        />
        <TransactionName
          data={data}
          error={error}
          onChange={this.handleNameChange}
        />
        <IncrementerGroup
          income={income}
          values={values}
          onMouseDown={this.onMouseDown}
          onMouseUp={this.stopTimer}
        />
        <div className="col-12">
          <div className="row mt-2">
            <div className="col-6">
              <CustomCheck
                key={`check${!repeat}`}
                label="ONE-OFF"
                status={!repeat}
                onClick={this.repeatClicked}
              />
            </div>
            <div className="col-6 ">
              <CustomCheck
                key={`check${repeat}`}
                label="REPEAT"
                status={repeat}
                onClick={this.repeatClicked}
              />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12">
              {repeat ? (
                <RepeatInput
                  status={repeatOnDays}
                  onClick={this.repeatTypeClicked}
                  onDaysSelect={this.handleDaysSelect}
                  onDateChange={this.handleDateChange}
                  days={days}
                  name="repeatDate"
                  date={repeatDate}
                  handleFrequencyChange={this.handleFrequencyChange}
                  handleRepTypeChange={this.handleRepTypeChange}
                  repeatType={repeatType}
                  frequency={frequency}
                />
              ) : (
                <CustomDatePicker
                  name="oneOffDate"
                  date={oneOffDate}
                  onDateChange={this.handleDateChange}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TransactionForm;
