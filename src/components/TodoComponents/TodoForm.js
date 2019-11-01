import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
        itemName: ''
    };
  }

  const handleChange = () => {
      //do something
  }

  render() {
      <input type="text" 
        onChange={this.handleChange} 
        name="item" 
        value={this.state.itemName}
        />
  }
}

export default TodoForm;