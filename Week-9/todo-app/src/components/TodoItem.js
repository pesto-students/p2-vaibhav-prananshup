
const TodoItem = ({todo, type, todoDoneHandler}) => {
    return (
        <li>
           {todo.text} - {todo.done.toString()}
           { type === 'TODO' 
              ? <div><button type="button" onClick={() => todoDoneHandler(todo.id)}>Done</button></div>
              : ''
           }
        </li>
    )
}

export default TodoItem;