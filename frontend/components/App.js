import React from 'react'
import Form from "./Form"
import TodoList from "./TodoList"

export default class App extends React.Component {
  constructor() {
    super() 
      this.state = {
        inputValue: '',
        todos: [
          {
            name: 'Make Coffee',
            id: '6876868686',
            completed: false
          },
          {
            name: "Take out trash",
            id: '898797979',
            completed: false
          }
        ]
      }
  }
  
  handleChange = (name, value) => {
    return this.setState({[name]: value})
  }
  
  addHandle = () => {

    const newTodo = {
      name: this.state.inputValue,
      id: Date.now(),
      completed: false
    }


    this.setState({
      ...this.state,
      inputValue: '',
      todos: [...this.state.todos, newTodo]
    })
    
  }
  handleClear = () => {
    return (
      this.setState({
        ...this.state,
        todos: this.state.todos.filter(todo => {
          return (
            todo.completed === false
          )
        })
      })
    )
  }

doneHandle = (id) => {
this.setState({...this.state, todos:
  this.state.todos.map(todo => {
    if (todo.id === id) {
      return {
        ...todo, 
        completed: true
      }
    }
    return todo
  })})
}


  render() {
    const todos = this.state.todos
    return (
      <div>
        <TodoList todos={todos} click={this.doneHandle}/>
        <Form changeHandle={this.handleChange} values={this.state.inputValue} onAdd={this.addHandle} />
        <button onClick={this.handleClear}>Clear</button>
      </div>
    )
  }
}
