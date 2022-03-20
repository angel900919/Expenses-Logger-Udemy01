import ExpensesBar from "./components/expenses/ExpensesBar";
import BarChart from "./components/barchart/BarChart";
import ButtonFilter from "./components/ButtonFilter";
import AddExpenseButton from "./components/AddExpenseButton";
import AddExpenseValues from "./components/AddExpenseValues";
import React from "react";



function App() {

    const [newExpense, addExpenseState] = React.useState(false);
    const [expensesArrayST, setExpense] = React.useState([]);

    function addExpense(){
        addExpenseState((preState) => !preState)
    }

    function cancelButton(){
        addExpenseState((preState) => !preState)
    }

    function addButton(objectExpense){
        setExpense((preVal)=> [...preVal,objectExpense])

    }

    function yearSelection(year){
        console.log(year)
    }



  return (
      <div>
          {newExpense ? <AddExpenseValues eventCancel={cancelButton} eventAdd={addButton}/> :<AddExpenseButton event={addExpense}/> }
          <div className="main--container">
              <ButtonFilter event={yearSelection}/>
              <BarChart values={expensesArrayST}></BarChart>
              {expensesArrayST.length > 0 && expensesArrayST.map((expensesItems)=> <ExpensesBar details={expensesItems}></ExpensesBar>) }
          </div>
      </div>

  );
}

export default App;
