import { useReducer, useEffect } from 'react';
import { todoReducer } from '../todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const handleTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
    }

    const pendingTodosCount = () => {
        return todos.filter( todo => todo.done === true).length;
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    
    return {
        todos,
        handleTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: pendingTodosCount(),
    }

}