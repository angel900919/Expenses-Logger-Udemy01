import React from "react";
import Expenses from "./Expenses";
import ValueExp from "./ValueExp";


export default function ExpensesBar(props){
    return(
     <div className="expenses--Bar">
         <div className="expenses--Bar--box1">
             <Expenses date={props.details} ></Expenses>
             <h2 className="ExpenseStyle">{props.details.title}</h2>
         </div>
         <ValueExp value={props.details.amount} ></ValueExp>
     </div>


    )
}