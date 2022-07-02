import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import React from "react";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("SaiSri Angajala");
    console.log(title);
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price ">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
};
export default ExpenseItem;
