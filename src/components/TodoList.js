import Todo from "./Todo";

function TodoList({ todos }) {
    return (
        <div>
            {todos.map(todo => {
                return (<Todo key={todo.id} text={todo.text} isComplete={todo.isComplete} />)
            })}

        </div>
    )
}

export default TodoList;
