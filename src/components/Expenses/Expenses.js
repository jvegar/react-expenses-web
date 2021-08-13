import React, { useState } from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses({ items }) {
  const [selectediItems, setSelectediItems] = useState(items);

  const listItems = selectediItems.map((item) => (
    <ExpenseItem
      key={Math.random()}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  ));

  const filterItemsByYear = (year) => {
    const filteredItems = [];
    //console.log(items);
    items.forEach((el) => {
      if (new Date(el.date).getFullYear() === parseInt(year)) {
        console.log(el);
        filteredItems.push(el);
      }
    });
    return filteredItems;
  };

  const selectedYearHandler = (selectedYear) => {
    //console.log(selectedYear);
    const filteredItems = filterItemsByYear(selectedYear);
    console.log(filteredItems);
    setSelectediItems(filteredItems);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter onSelectedYearFilter={selectedYearHandler} />
      {listItems}
      {/* <ExpenseItem 
            title={items[0].title}
            amount={items[0].amount}
            date={items[0].date}
            />
            <ExpenseItem 
            title={items[1].title}
            amount={items[1].amount}
            date={items[1].date}
            />
            <ExpenseItem 
            title={items[2].title}
            amount={items[2].amount}
            date={items[2].date}
            />
            <ExpenseItem 
            title={items[3].title}
            amount={items[3].amount}
            date={items[3].date}
            /> */}
    </Card>
  );
}

export default Expenses;
