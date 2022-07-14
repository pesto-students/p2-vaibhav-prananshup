import { useState } from 'react';
import Content from "./Content";
import Header from "./Header";

const TodoPage = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            text: todo,
            done: false,
        };
        setTodos((todos) => [...todos, newTodo])
        setTodo(() => '');
    }

    const changeHandler = (e) => {
        setTodo(() => e.target.value)
    }

    const todoDoneHandler = (id) => {
        const mapTodos = prevTodos => [...prevTodos].map(prevTodo => {
                if (prevTodo.id === id) 
                    prevTodo.done = true;
                return prevTodo
            });
        setTodos((prevTodos) => mapTodos(prevTodos));
        console.log(id)
    }

    return (
        <>
            <Header submitHandler={submitHandler} changeHandler={changeHandler} todo={todo}/>
            <Content todos={todos} todoDoneHandler={todoDoneHandler}/>
        </>
    )
}

export default TodoPage;