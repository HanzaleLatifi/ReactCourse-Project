import React, { useState } from 'react'

function Navbar({ selectHandler, unCompleteTodos }) {

    const [status, setStatus] = useState('all');

    const onSelect = (e) => {
        setStatus(e.target.value)
        selectHandler(e.target.value);


    }

    if (!unCompleteTodos) return <h2>set</h2>;
    return (
        <header>
            <div>unCompleteTodos :{unCompleteTodos.length}</div>
            <div>
                <select onChange={onSelect} value={status}>
                    <option value='all'>All</option>
                    <option value='complete'>Completed</option>
                    <option value='unComplete'>unCompleted</option>
                </select>
            </div>


        </header>
    )
}

export default Navbar
