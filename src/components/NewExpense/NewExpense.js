import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const importDataToNewExpenseHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };
    props.importDataToApp(expenseData);
  };
  return (
    <div className="new-expense">
      <form>
        <ExpenseForm
          importDataToNewExpense={importDataToNewExpenseHandler}
        ></ExpenseForm>
      </form>
    </div>
  );
};

export default NewExpense;
