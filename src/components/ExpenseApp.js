import React,{useState , useEffect} from 'react'
import OverView from './OverView';
import Transaction from './Transaction';


function ExpenseApp() {
    const [expense, setExpense] = useState(0);
    const [income , setIncome]=useState(0);
    const [transaction , setTransaction]=useState([]);

    useEffect(() => {
       let inc=0;
       let exp=0;
       transaction.forEach(t=>t.type==='expense' ? exp+=parseInt(t.amount) : inc+=parseInt(t.amount) ) ; 
       setExpense(exp);
       setIncome(inc);
       
    }, [transaction])

    const addTransaction=(formValues)=>{
        
        const newObj={...formValues,id:Date.now() };
        setTransaction([...transaction , newObj])

    }

    return (
        <div className='app'>
            <header><h1>Expense App</h1></header>
            <OverView expense={expense} income={income} addTransaction={addTransaction}  />
            <Transaction transaction={transaction}/>
        
        </div>
    )
}

export default ExpenseApp
