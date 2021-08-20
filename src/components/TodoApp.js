import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function TodoApp() {
    const [todos, setTodos] = useState([]);

    const addTodoHandler = (input) => {
        const newTodo = { id: Math.floor(Math.random() * 1000), text: input, isComplete: false };
        setTodos([...todos, newTodo]);
    }
    return (
        <div className="App">
            <TodoForm inputHandler={addTodoHandler} />
            <TodoList todos={todos} />


        </div>
    )
}

export default TodoApp
