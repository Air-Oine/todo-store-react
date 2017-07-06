export const ADD_TODO = 'ADD_TODO'
export const REMOVE_ALL = 'REMOVE_ALL'
export const CHANGE_TAB = 'CHANGE_TAB'

export function addTodo(title) {
    return {
        type: ADD_TODO,
        title
    }
}

export function removeAll() {
    return {
        type: REMOVE_ALL
    }
}

export function changeTab(todo) {
    return {
        type: CHANGE_TAB,
        todo
    }
}