import React, { Component,PropTypes } from 'react';
import { View, Image,Text,ScrollView } from 'react-native';
import Todo from '../modele/Todo'
import TodoComponent from './TodoItem'

import { connect } from 'react-redux';
import { changeTab } from './actions/todo.action'

class TodoList extends Component {
    
    constructor(props){
        super(props)

        this.changeValue = this.changeValue.bind(this);
        this.createTodoList = this.createTodoList.bind(this);
    }

    changeValue(todo){
        this.props.changeTab(todo)
    }

    createTodoList() {
        return this.props.todos.map((todo, index) =>{
            return (
                <TodoComponent 
                    key={index} 
                    todo={todo} 
                    changeValue={(todo) => this.changeValue(todo)} />
            );
        })
    }
    
    render() {
        if(this.props.todos.length==0){
            return (
                <Text> Vous n'avez aucun TODO ! </Text>
            );
        }
        else {
            const todoList = this.createTodoList();
            return (
                <ScrollView>
                    <Text> Il y a {this.props.todos.length} élément(s) </Text>
                    {todoList}
                </ScrollView>
            );
        }
    }
}


function mapStateToProps(state) {
    return {
        todos: state.todoReducer.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeTab: todo => dispatch(changeTab(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

TodoList.propType = {
  todoList: PropTypes.arrayOf(PropTypes.Todo).required,
}