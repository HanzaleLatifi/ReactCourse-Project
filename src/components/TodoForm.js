import React, { useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState("");

    const changeHandler = (e) => {
        setInput(e.target.value);
    }

    const formHandler = (e) => {
        e.preventDefault();
        props.inputHandler(input);
        setInput('');

    }


    return (
        <>
            <form className="form" onSubmit={formHandler}>
                <input type="text" onChange={changeHandler} value={input} ></input>
                <button>Add</button>
            </form>

        </>

    )
}

export default TodoForm
