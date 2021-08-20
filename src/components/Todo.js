import React from 'react'

function Todo({ text, id, isComplete }) {
    return (
        <div className='todo'>
            <div>
                {text}
            </div>
            <div>
                <button>remove</button>
                <button>edit</button>
            </div>



        </div>
    )
}

export default Todo
