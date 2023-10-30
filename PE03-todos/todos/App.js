import React, { Component } from 'react'
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native'

import Heading from './Heading'
import Input from './Input'
import Button from './Button'
import TodoList from './TodoList'

let todoIndex = 0

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
    this.submitTodo = this.submitTodo.bind(this)
    this.toggleComplete = this.toggleComplete.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  deleteTodo (todoIndex) {
    let { todo } = this.state
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
    this.setState({ todos })
  }

  toggleComplete (todoIndex) {
    let todos = this.state.todostodos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete
      }
    })
    this.setState({ todos })
  }
  submitTodo () {
    if (this.state.inputValue.match(/^\s*$/)) { 
      return
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex, 
      complete: false
    }
    todoIndex++ 
    
    const todos = [...this.state.todos, todo]
    this.setState({ todos, inputValue: '' }, () => {
      console.log('State: ', this.state)
    }) 
  }

  inputChange(inputValue) {
    console.log(' Input Value: ' , inputValue)
    this.setState({ inputValue })
  }

  render() {
    const { inputValue, todos, type } = this.state;
    const filteredTodos =
      type === 'All'
        ? todos
        : type === 'Complete'
        ? todos.filter((todo) => todo.complete)
        : todos.filter((todo) => !todo.complete);
        
    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps='always'
          style={styles.content}>
          <Heading />
          <Input 
            inputValue={inputValue} 
            inputChange={(text) => this.inputChange(text)} />

          <TodoList toggleComplete={this.toggleComplete}
                    deleteTodo={this.deleteTodo}
                    todos={todos} />
          <Button submitTodo={this.submitTodo} />
        </ScrollView>
        <View style={styles.tabBar}>
          <TouchableOpacity onPress={() => this.setState({ type: 'All' })}>
            <Text style={type === 'All' ? styles.activeTab : styles.tab}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({ type: 'Active' })}>
            <Text style={type === 'Active' ? styles.activeTab : styles.tab}>Active</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({ type: 'Complete' })}>
            <Text style={type === 'Complete' ? styles.activeTab : styles.tab}>Complete</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#e7e7e7',
    padding: 20,
  },
  tab: {
    color: 'black',
  },
  activeTab: {
    color: 'blue',
  },
});

export default App