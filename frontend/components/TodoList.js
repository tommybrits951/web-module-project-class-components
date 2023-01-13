import React from 'react'
import Todo from "./Todo"
export default class TodoList extends React.Component {
  click = (id) => {
    return this.props.click(id)
  }
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => {
          return <Todo key={todo.id} click={this.click} todo={todo}/>
        })}
      </ul>
    )
  }
}
