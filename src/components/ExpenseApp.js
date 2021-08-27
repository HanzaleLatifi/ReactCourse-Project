import React,{useState} from 'react'
import OverView from './OverView';
import Transaction from './Transaction';


function ExpenseApp() {
    const [expense, setExpense] = useState(0);
    const [income , setIncome]=useState(0);
    const [transaction , setTransaction]=useState([]);

    return (
        <div className='app'>
            <header><h1>Expense App</h1></header>
            <OverView expense={expense} income={income}/>
            <Transaction/>
        
        </div>
    )
}

export default ExpenseApp
