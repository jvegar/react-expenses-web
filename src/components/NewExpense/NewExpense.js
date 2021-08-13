import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

function NewExpense(props) {

    const addExpenseHandler = (expenseData) => {
        console.log(expenseData);
        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onAddExpense={addExpenseHandler}/>
        </div>
    );
}

export default NewExpense;
