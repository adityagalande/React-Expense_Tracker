import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYar, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.js" + selectedYear);
    setFilteredYear(selectedYear);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYar;
  });

  // Here we check condition if data is present or not
  // let expensesContent = <p>No Expenses Found.</p>;

  // if (filterExpenses.length > 0) {
  //   expensesContent = filterExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYar}
          onChangeFilter={filterChangeHandler}
        />

        {/* here we use abouv condition */}
        {/* {expensesContent} */}
        <ExpensesList item={filterExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
