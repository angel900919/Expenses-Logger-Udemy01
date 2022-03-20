import React from "react";
import "./AddExpenseButton.css"


export default function AddExpenseButton(props){
    return(
        <div className="AddExpense--container">
            <button onClick={props.event} className="AddExpense--button" type="button">Add New Expense</button>
        </div>
    )
}