import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card'

function Expenses(props) {
    return (
        <Card className='expenses'>
        {props.expenses.map((el, id) => {
         return (
            <ExpenseItem
                title={el.title}
                amount={el.amount}
                date={el.date} 
                key={id}
                />
            );
        })}
        </Card>
    );
}

export default Expenses;