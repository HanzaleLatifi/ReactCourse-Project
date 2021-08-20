import React from 'react'

function Todo({ todo, completeHandler, removeHandler }) {
    return (
        <div className="todo" >
            <div onClick={completeHandler} className={todo.isComplete ? 'complete' : ''}>
                {todo.text}
            </div>
            <div>
                <button onClick={removeHandler} >remove</button>
                <button>edit</button>
            </div>



        </div>
    )
}

export default Todo
