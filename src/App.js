import React, { Component } from 'react';
import { View } from 'react-native';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import todoReducer from './reducer/todo.reducer';
import { connect } from 'react-redux';

import Todo from '../modele/Todo'
import TodoList from './TodoList'
import TodoForm  from './TodoForm'

//Adding Thunk and Logger to middlewares
const middlewares = [thunk];
const logger = createLogger({
    duration: true,
    collapsed: true,
});
middlewares.push(logger);

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

//Store containing todo reducer
const store = createStoreWithMiddleware (
    combineReducers({
        todoReducer
    })
);

export default class App extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <Provider store={store}>
                <View>
                    <TodoForm></TodoForm>
                    <TodoList></TodoList>
                </View>
            </Provider>
        );
    } 
}