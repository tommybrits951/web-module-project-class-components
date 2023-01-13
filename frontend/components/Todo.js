import React from 'react'

export default class Todo extends React.Component {
  
  handleClick = (e) => {
    const {id} = e.target 
    console.log(id)
    return this.props.click(id)
  }
  
  render() {
    return (
      
        <li id={this.props.todo.id} onClick={this.handleClick}>{this.props.todo.name}</li>
      
    )
  }
}
