import React, { Component } from "react";
import TransactionSlider from "./TransactionSlider";
import TransactionName from "./TransactionName";
import CustomCheck from "./CustomCheck";
import RepeatInput from "./RepeatInput";
import CustomDatePicker from "./CustomDatePicker";
import IncrementerGroup from "./IncrementerGroup";
import DaysOfWeek from "./DaysOfWeek";
import Submit from "./Submit";
import Joi from "joi-browser";

class TransactionForm extends Component {
  constructor(props) {
    super(props);
    const { interval } = this.startInterval;
    this.timer = null;
    let transaction = {};
    if (this.props.editTransaction === null) {
      transaction = {
        id: "",
        income: false,
        name: { data: "", error: "" },
        values: [0, 50, 60],
        repeat: true,
        repeatOnDays: true,
        days: [
          { id: 0, day: "Mo", longDay: "Monday", active: false },
          { id: 1, day: "Tu", longDay: "Tuesday", active: false },
          { id: 2, day: "We", longDay: "Wednesday", active: false },
          { id: 3, day: "Th", longDay: "Thursday", active: false },
          { id: 4, day: "Fr", longDay: "Friday", active: false },
          { id: 5, day: "Sa", longDay: "Saturday", active: false },
          { id: 6, day: "Su", longDay: "Sunday", active: false },
        ],
        repeatDate: new Date(),
        oneOffDate: new Date(),
        repeatType: {},
        frequency: "",
      };
    } else {
      transaction = { ...this.props.editTransaction };
    }
    this.state = {
      transaction: { ...transaction },
      interval: interval,
      changeFactor: 1.4,
      changeAmount: 1,
      submitError: "",
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
    const { transaction } = this.state;
    const startDate = date;
    transaction[name] = startDate;
    this.setState({ transaction });
  };

  handleDaysSelect = (day) => {
    const days = [...this.state.transaction.days];
    const { transaction } = this.state;
    const index = days.indexOf(day);
    transaction.days[index].active = days[index].active ? false : true;
    this.setState({ transaction });
  };

  handleNameChange = ({ currentTarget: input }) => {
    const { transaction } = this.state;
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      transaction.name.error = errorMessage;
    } else {
      delete transaction.name.error;
    }
    transaction.name.data = input.value;
    this.setState({ transaction });
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

  stopTimer = (e = null) => {
    let changeAmount = 1;
    clearTimeout(this.timer);
    this.resetInterval();
    this.setState({ changeAmount });
    if (e !== null) {
      e.preventDefault();
    }
  };

  // True if plus pressed, false if subtracting
  onMouseDown = ({ event, addition, index, type }) => {
    if (event.button === 0 || type === "touch") {
      let { transaction, interval, changeFactor, changeAmount } = this.state;
      let { values } = this.state.transaction;
      let currentValue = values[index];
      let props = { index, values, currentValue, addition, changeAmount };
      values =
        addition === 1
          ? IncrementerGroup.increasing(props)
          : IncrementerGroup.decreasing(props);
      transaction.values = values;
      this.setState({ transaction });
      this.timer = setTimeout(
        () => this.onMouseDown({ event, addition, index, type }),
        interval
      );
      if (changeAmount === 1) {
        changeAmount = 2;
        this.setState({ changeAmount });
      }
      interval = IncrementerGroup.changeInterval(interval, changeFactor);
      this.setState({ interval });
    } else {
      return;
    }
  };

  handleIncomeTypeChange = (checked) => {
    let { transaction } = this.state;
    transaction.income = checked;
    this.setState({ transaction });
  };

  repeatClicked = () => {
    let { transaction } = this.state;
    transaction.repeat = transaction.repeat ? false : true;
    this.resetRepeat();
    this.setState({ transaction });
  };

  repeatTypeClicked = () => {
    let { transaction } = this.state;
    transaction.repeatOnDays = transaction.repeatOnDays ? false : true;
    this.resetPeriod();
    this.setState({ transaction });
  };

  resetRepeat = () => {
    let { transaction } = this.state;
    transaction.repeatOnDays = false;
    this.setState({ transaction });
    this.resetPeriod();
  };

  resetPeriod = () => {
    let { transaction } = this.state;
    transaction.frequency = transaction.repeatType = "";
    transaction.oneOffDate = transaction.repeatDate = new Date();
    transaction.days = DaysOfWeek.resetDays(transaction.days);
    this.setState({ transaction });
  };

  handleFrequencyChange = (e) => {
    let { transaction } = this.state;
    transaction.frequency = parseInt(e.target.value);
    this.setState({ transaction });
  };

  handleRepTypeChange = (e) => {
    let { transaction } = this.state;
    const repeatType = {
      short: e.target.options[e.target.selectedIndex].value,
      long: e.target.options[e.target.selectedIndex].text,
    };
    transaction.repeatType = repeatType;
    this.setState({ transaction });
  };

  handleSubmit = () => {
    const {
      days,
      name,
      values,
      repeatType,
      frequency,
    } = this.state.transaction;
    const { transaction } = this.state;
    const { onSubmit } = this.props;

    let nameResult = this.validateProperty({ name: "name", value: name.data })
      ? false
      : true;
    let valuesResult = IncrementerGroup.validateValues(values);
    let repeatResult = transaction.repeat
      ? RepeatInput.validateRepeat({
          repeatType,
          frequency,
          days,
        })
      : true;

    if (
      nameResult === false ||
      valuesResult === false ||
      repeatResult === false
    ) {
      const submitError = "Cannot proceed: check form inputs are valid";
      this.setState({ submitError });
    } else {
      onSubmit(transaction);
    }

    console.log(
      `repeatRes ${repeatResult} valuesRes ${valuesResult} nameRes ${nameResult}`
    );
  };

  isEditForm(editTransaction) {
    return editTransaction ? true : false;
  }

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
      name,
    } = this.state.transaction;
    const { submitError } = this.state;
    const { data, error } = name;

    return (
      <div>
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
        <Submit
          onClick={this.handleSubmit}
          isEditForm={this.isEditForm(this.props.editTransaction)}
        />
        {submitError && <div className="alert alert-danger">{submitError}</div>}
      </div>
    );
  }
}

export default TransactionForm;
