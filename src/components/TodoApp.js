import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [filterTodo, setFilterTodo] = useState([]);

    const [status, setStatus] = useState('all');

    useEffect(() => {
        selectHandler(status);

    }
        , [todos, status])


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
    const updateTodo = (id, newValue) => {
        const index = todos.findIndex(t => t.id === id);
        const newTodo = { ...todos[index] };
        newTodo.text = newValue;
        const updatedTodos = [...todos];
        updatedTodos[index] = newTodo;
        setTodos(updatedTodos);



    }
    const selectHandler = (select) => {

        switch (select) {
            case 'all':
                setFilterTodo(todos);
                break;
            case 'complete':
                setFilterTodo(todos.filter(t => t.isComplete));
                break;

            case 'unComplete':
                setFilterTodo(todos.filter(t => !t.isComplete));
                break;

            default: setFilterTodo(todos);



        }
    }

    return (
        <div className="App">
            <Navbar todos={todos} selectHandler={selectHandler} unCompleteTodos={todos.filter(todo => !todo.isComplete)} status={status} setStatus={setStatus} />
            <TodoForm inputHandler={addTodoHandler} />
            <TodoList todos={filterTodo} completeHandlerr={completeHandler} removeHandlerr={removeHandler} updateHandler={updateTodo} />


        </div>
    )
}

export default TodoApp
