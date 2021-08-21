import Todo from "./Todo";
import React, { useState } from 'react';
import TodoForm from './TodoForm'

function TodoList({ todos, completeHandlerr, removeHandlerr, updateHandler }) {
    const [edit, setEdit] = useState({ id: null, text: '', isComplete: false });



    const renderTodo = () => {
        {

            return todos.map(todo => {
                return (<Todo key={todo.id}
                    todo={todo}
                    completeHandler={() => completeHandlerr(todo)}
                    removeHandler={() => removeHandlerr(todo)}
                    editHandler={() => setEdit(todo)}
                />)
            })
        }

    }
    const editTodo = (newValue) => {
        updateHandler(edit.id, newValue);
        setEdit({ id: null, text: '' });
    }

    return (
        <div>
            {edit.id ? <TodoForm inputHandler={editTodo} edit={edit} /> : renderTodo()}
        </div>
    )
}

export default TodoList;
