import "./AddExpenseValue.css"
import React from "react";

export default function AddExpenseValues(props){

    const months = [ "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ];

    const [formData, setFormData] = React.useState(
        {title: "", date: "", amount: ""}
    )

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    const style = {
        margin:"0",
        fontSize: "15px"
    }


    function addNewExpense(){
        props.eventAdd(
            {
                title: formData.title,
                year:formData.date.split('-')[0],
                month:months[parseInt(formData.date.split('-')[1])-1],
                day:formData.date.split('-')[2],
                amount: formData.amount
            }
        )

    }


    return(
     <form className="AddExpenseValues--container">
         <div className="AddExpenseValues--inputs">
             <div>
                 <div>
                     <h2 style={style}>Title</h2>
                     <input
                         className="AddExpenseValues--inputs--field"
                         onChange={handleChange}
                         type="text"
                         name="title"
                         value={formData.title}
                     />
                 </div>
                 <div>
                     <h2 style={style}>Date</h2>
                     <input
                         className="AddExpenseValues--inputs--field"
                         onChange={handleChange}
                         type="date"
                         name="date"
                         value={formData.date}
                     />
                 </div>
             </div>
             <div>
                 <h2 style={style}>Amount</h2>
                 <input
                     className="AddExpenseValues--inputs--field"
                     onChange={handleChange}
                     type="number"
                     name="amount"
                     value={formData.amount}
                 />
             </div>
         </div>
             <div className="AddExpenseValues--button">
                 <button className="AddExpenseValues--button-cancel" type="button" onClick={props.eventCancel}>Cancel</button>
                 <button className="AddExpenseValues--button-add" type="button" onClick={addNewExpense}>Add Expense</button>
             </div>

     </form>
    )
}