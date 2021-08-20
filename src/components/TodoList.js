import Todo from "./Todo";

function TodoList({ todos, completeHandlerr, removeHandlerr }) {
    return (
        <div>
            {todos.map(todo => {
                return (<Todo key={todo.id} todo={todo} completeHandler={() => completeHandlerr(todo)} removeHandler={() => removeHandlerr(todo)} />)
            })}

        </div>
    )
}

export default TodoList;
