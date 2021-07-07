import React,{useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => { 

// const [enterdtitle, setEnterdtitle] = useState('');
// const [enterdamount, setEnterdamount] = useState('');
// const [enterddate, setEnterddate] = useState('');

const [userInput,setUserInput] =useState({
    enteredtitle:'',
    enteredamount:'',
    entereddate:''
});


// event handler

const titleChangeHandler = (event) =>{
   // setEnterdtitle(event.target.value);
   setUserInput({
       ...userInput,                        // spread oprator defaul advance js to input user data.
    enteredtitle: event.target.value,
   });
   
};

const amountChangeHandler = (event) =>{
   // setEnterdamount(event.target.value);
   setUserInput({
       ...userInput,
    enteredamount: event.target.value,
   });
    
};

const dateChangeHandler = (event) =>{
    //setEnterddate(event.target.value);
    setUserInput({
        ...userInput,
        entereddate: event.target.value,
       });
};

    return (
        <form>
            <div className='new-expense__control'>
                <div className='new-expense__control'></div>
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}/>

                <div className='new-expense__control'></div>
                <label>Amount</label>
                <input type="number" min='0.01' step='0.01' onChange={amountChangeHandler} />

                <div className='new-expense__control'></div>
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} />

            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;
