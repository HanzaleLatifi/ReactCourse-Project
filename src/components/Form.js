import React, { useState } from 'react';

function Form({addTransaction}) {
    const [formValues, setFormValues] = useState({type:'expense' , amount:0 , desc:''});

    const changeHandler=(e)=>{
        // console.log([e.target.name])
        setFormValues({...formValues, [e.target.name]:e.target.value })
    }
    const formHandler=(e)=>{
        e.preventDefault();
        addTransaction(formValues);
        

        
    }
    return (
        <form className='formContainer' onSubmit={formHandler}>
            <input type='number' name='amount' placeholder='amount'  onChange={changeHandler} value={formValues.amount}></input>
            <input name='desc' placeholder='description' onChange={changeHandler} value={formValues.desc} ></input>

            <div>
                <input type='radio' name='type' value='expense'  onChange={changeHandler} checked={formValues.type==='expense'}/>
                <label>expense</label>
                <input type='radio' name='type' value='income' onChange={changeHandler} checked={formValues.type==='income'}/> 
                <label>income</label>
            </div>
            <button type='submit'>ADD Transaction</button>


        </form>
    )
}

export default Form;
