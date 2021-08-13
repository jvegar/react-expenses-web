import React from "react";
import "./ExpenseMonth.css";

function ExpenseMonth(props) {
  return (
    <div className="expense-month">
      <div className="expense-month__box">
        <div
          style={{
            backgroundColor: "rgba(186,171,241,1.0)",
            minHeight: props.up,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            borderBottomLeftRadius: props.up===100?5:0,
            borderBottomRightRadius: props.up===100?5:0,
          }}
        ></div>
        <div
          style={{
            backgroundColor: "rgba(62,34,172,1.0)",
            minHeight: props.down,
            borderTopLeftRadius: props.down===100?5:0,
            borderTopRightRadius: props.down===100?5:0,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          }}
        ></div>
      </div>
      <h2>{props.name}</h2>
    </div>
  );
}

export default ExpenseMonth;
