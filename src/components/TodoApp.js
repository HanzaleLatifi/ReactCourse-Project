import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function TodoApp() {
    const [todos, setTodos] = useState([]);


    const completeHandler = (todo) => {
        const index = todos.findIndex(t => t.id === todo.id);
        const newTodo = { ...todos[index] };
        newTodo.isComplete = !newTodo.isComplete;
        const updatedTodos = [...todos];
        updatedTodos[index] = newTodo;
        setTodos(updatedTodos);


    }
    const addTodoHandler = (input) => {
        const newTodo = { id: Math.floor(Math.random() * 1000), text: input, isComplete: false };
        setTodos([...todos, newTodo]);
    }
    const removeHandler = (todo) => {

        const filter = todos.filter(t => t.id !== todo.id);
        setTodos(filter);

    }
    return (
        <div className="App">
            <TodoForm inputHandler={addTodoHandler} />
            <TodoList todos={todos} completeHandlerr={completeHandler} removeHandlerr={removeHandler} />


        </div>
    )
}

export default TodoApp
