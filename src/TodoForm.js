import React, { Component,PropTypes } from 'react';
import { View, Image,Button, TextInput } from 'react-native';

import { connect } from 'react-redux';
import { addTodo, removeAll } from './actions/todo.action'

class TodoForm extends Component {

    constructor(props){
        super(props)
        this.title

        this.add = this.add.bind(this);
    }

    add(){
        console.log('add todo')
        if(this.title != null && this.title != ''){
            this.props.addTodo(this.title);
        }
    }

    render() {
        return (
            <View>
                <TextInput
                placeholder='Titre de la chose à faire'
                onSubmitEditing={(event) => this.title =  event.nativeEvent.text}
                />
                <Button 
                onPress={this.add}
                title="Ajouter" 
                />

                <Button 
                onPress={this.props.removeAll}
                title="Supprimer les éléments" 
                />
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: title => dispatch(addTodo(title)),
        removeAll: () => dispatch(removeAll()),
    }
}

export default connect(undefined, mapDispatchToProps)(TodoForm);