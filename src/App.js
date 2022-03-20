import ExpensesBar from "./components/expenses/ExpensesBar";
import BarChart from "./components/barchart/BarChart";
import ButtonFilter from "./components/ButtonFilter";
import AddExpenseButton from "./components/AddExpenseButton";
import AddExpenseValues from "./components/AddExpenseValues";
import React from "react";
import {nanoid} from "nanoid"



function App() {

    const [newExpense, addExpenseState] = React.useState(false);
    const [expensesArray, setExpense] = React.useState([]);
    const [expensesArrayST2019, setExpense2019] = React.useState([]);
    const [expensesArrayST2020, setExpense2020] = React.useState([]);
    const [expensesArrayST2021, setExpense2021] = React.useState([]);
    const [expensesArrayST2022, setExpense2022] = React.useState([]);


    function addExpense(){
        addExpenseState((preState) => !preState)
    }

    function cancelButton(){
        addExpenseState((preState) => !preState)
    }

    function addButton(objectExpense){

        switch (objectExpense.year){
            case "2019":
                setExpense2019((preVal)=> [...preVal,objectExpense])
                break;
            case "2020":
                setExpense2020((preVal)=> [...preVal,objectExpense])
                break;
            case "2021":
                setExpense2021((preVal)=> [...preVal,objectExpense])
                break;
            case "2022":
                setExpense2022((preVal)=> [...preVal,objectExpense])
                break;
            default:

        }



    }


    function yearSelection(year){
        switch (year){
            case "2019":
                setExpense(expensesArrayST2019)
                break;
            case "2020":
                setExpense(expensesArrayST2020)
                break;
            case "2021":
                setExpense(expensesArrayST2021)
                break;
            case "2022":
                setExpense(expensesArrayST2022)
                break;
            default:

        }
    }

  return (
      <div>
          {newExpense ? <AddExpenseValues eventCancel={cancelButton} eventAdd={addButton}/> :<AddExpenseButton event={addExpense}/> }
          <div className="main--container">
              <ButtonFilter event={yearSelection} />
              <BarChart values={expensesArray}></BarChart>
              {expensesArray.length > 0 && expensesArray.map((expensesItems)=> <ExpensesBar key={nanoid()} details={expensesItems}></ExpensesBar>) }
          </div>
      </div>
  );
}

export default App;
