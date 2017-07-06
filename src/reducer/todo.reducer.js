import { ADD_TODO, REMOVE_ALL, CHANGE_TAB } from '../actions/todo.action';
import Todo from '../../modele/Todo';

//Initial state contains todo list
export const initialState = {
    todos: []
}

//Handling different actions on todo list
export default function todoReducer (state = initialState, action) {
    switch (action.type) {

    case ADD_TODO: {
        const newTodo = new Todo();
        newTodo.title = action.title
        newTodo.id = state.todos.length.toString()
        newTodo.isDone = false

        return {
        ...state,
        todos: [newTodo, ...state.todos]
        }
    }

    case REMOVE_ALL: {
        return {
        ...state,
        todos: []
        }
    }

    case CHANGE_TAB: {
        let index = state.todos.findIndex(x => x.id == action.todo.id)
        
        action.todo.isDone =! action.todo.isDone
        state.todos[index] = action.todo

        return {
            ...state
        }
    }
    default:
        return state;
    }
}