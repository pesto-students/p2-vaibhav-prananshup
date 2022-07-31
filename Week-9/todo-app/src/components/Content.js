import TodoList from "./TodoList"

const Content = ({todos, todoDoneHandler}) => {
    return (
        <>
            <p>Todo List :-</p>
            <TodoList type={"TODO"} todos={todos} todoDoneHandler={todoDoneHandler}/>
            <p>Done Todo List :-</p>
            {<TodoList type={"DONE"} todos={todos} todoDoneHandler={todoDoneHandler}/>}
        </>
    )
}

export default Content