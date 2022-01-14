import React from "react";
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
    const expenseTitle = props.title;
    const expenseAmount = props.amount;

    return (

        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <h2 className="expense-item__description">{expenseTitle}</h2>
            <div className="expense-item__price">${expenseAmount}</div>
        </div>
    );
};
export default ExpenseItem;