import React from 'react'

function Form() {
    return (
        <form className='formContainer'>
            <input name='desc'placeholder='description' ></input>
            <input name='amount'placeholder='amount' ></input>
            <div>
                <input type='radio' name='type' value='income' ></input>
                <label>Income</label>
                <input type='radio' name='type' value='expense'></input>
                <label>Expense</label>
            </div>

            
        </form>
    )
}

export default Form
