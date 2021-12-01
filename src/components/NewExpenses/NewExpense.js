import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const [isEditing,setEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
      };
      console.log(expenseData);
      props.onAddExpense(expenseData)
      setEditing(false)
    };
const startEditingHandler = () => {
    console.log(isEditing);
    setEditing(true)
    
}
const stopEditing = () =>{
    setEditing(false)
}

    return (
        <div className='new-expense'>
          
            
           { !isEditing && <button onClick= {startEditingHandler}>Add New Expenses</button>} 
           {isEditing && <ExpenseForm onSaveExpense = {  saveExpenseDataHandler } onCancel = {stopEditing} />}
            
        </div>
    )
}
 
export default NewExpense
