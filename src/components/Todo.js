import React from 'react'

function Todo({ todo, completeHandler, removeHandler, editHandler }) {
    return (
        <div className="todo" >
            <div onClick={completeHandler} className={todo.isComplete ? 'complete' : ''}>
                {todo.text}
            </div>
            <div>
                <button onClick={removeHandler} >remove</button>
                <button onClick={editHandler} >edit</button>
            </div>



        </div>
    )
}

export default Todo
