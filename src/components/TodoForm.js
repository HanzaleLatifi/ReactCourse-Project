import React, { useState, useRef, useEffect } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.text : '');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();

    }, [])

    const changeHandler = (e) => {
        setInput(e.target.value);
    }

    const formHandler = (e) => {
        e.preventDefault();
        if (input === '') {
            alert('empty')
            return;
        }
        props.inputHandler(input); //add or edit
        setInput('');

    }


    return (
        <>
            <form className="form" onSubmit={formHandler}>
                <input ref={inputRef} type="text" onChange={changeHandler} value={input} ></input>
                <button className={`btn   ${props.edit ? 'updateBtn' : 'addBtn'}   `}  >{props.edit ? 'Update' : 'ADD'}</button>
            </form>

        </>

    )
}

export default TodoForm
