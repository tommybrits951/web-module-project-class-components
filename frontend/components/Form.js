import React from 'react'

export default class Form extends React.Component {
  
  changeInput = (e) => {
    const {name, value} = e.target
    return (
      this.props.changeHandle(name, value)
    )
  }

  onSub = (e) => {
    e.preventDefault()
    this.props.onAdd()
  }


  render() {
 
    
    return (
      
        <form onSubmit={this.onSub}>
          
            <label>
            Task:
          <input type="text" value={this.props.values} name="inputValue" onChange={this.changeInput} placeholder="Enter Task"/>
            </label>
          
          
          <input type="submit" name='submit' value="Add" />
          
          
        </form>
      
    )
  }
}
  