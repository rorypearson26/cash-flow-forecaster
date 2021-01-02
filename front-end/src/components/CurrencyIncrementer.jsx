import React, { Component } from "react";

class CurrencyIncrementer extends Component {
  render() {
    const { label, index, value, onMouseDown, onMouseUp } = this.props;

    return (
      <div>
        {label === false ? null : <label>{label}</label>}
        <div className="row btn-group" role="group">
          <button
            type="button"
            className="col-3 btn btn-dark"
            onMouseDown={(e) =>
              onMouseDown({
                event: e,
                addition: -1,
                index: index,
                type: "mouse",
              })
            }
            onMouseUp={() => onMouseUp()}
            onTouchStart={(e) =>
              onMouseDown({
                event: e,
                addition: -1,
                index: index,
                type: "touch",
              })
            }
            onTouchEnd={() => onMouseUp()}
          >
            -
          </button>
          <input
            className="col-6 quantity text-center noselect"
            readonly
            value={value}
            name="quantity"
            type="number"
            placeholder="£"
          />
          <button
            id="increment"
            type="button"
            className="col-3 btn btn-dark"
            onMouseDown={(e) =>
              onMouseDown({
                event: e,
                addition: 1,
                index: index,
                type: "mouse",
              })
            }
            onMouseUp={() => onMouseUp()}
            onTouchStart={(e) =>
              onMouseDown({
                event: e,
                addition: 1,
                index: index,
                type: "touch",
              })
            }
            onTouchEnd={() => onMouseUp()}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

CurrencyIncrementer.defaultProps = { label: false };
export default CurrencyIncrementer;
