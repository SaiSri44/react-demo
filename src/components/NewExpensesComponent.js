import ExpenseItem from "./ExpenseItem";
import "./NewExpensesComponent.css";
import React from "react";

function NewExpensesComponent(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={props.expensesarr[0].title}
        amount={props.expensesarr[0].amount}
        date={props.expensesarr[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expensesarr[1].title}
        amount={props.expensesarr[1].amount}
        date={props.expensesarr[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expensesarr[2].title}
        amount={props.expensesarr[2].amount}
        date={props.expensesarr[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expensesarr[3].title}
        amount={props.expensesarr[3].amount}
        date={props.expensesarr[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default NewExpensesComponent;
