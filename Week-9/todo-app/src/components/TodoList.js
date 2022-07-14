import TodoItem from "./TodoItem"

const TodoList = ({todos, type, todoDoneHandler}) => {
    return (
        <ul>
            { todos && 
                type === 'TODO' 
                ?
                    todos.map(todo => !todo.done &&
                    <TodoItem key={todo.id} todo={todo} type={type} todoDoneHandler={todoDoneHandler}/>)
                :   
                    todos.map(todo => todo.done &&
                    <TodoItem key={todo.id} todo={todo} type={type} todoDoneHandler={todoDoneHandler}/>)
            }
        </ul>
    )
}

export default TodoList