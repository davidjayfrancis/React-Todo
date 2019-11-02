import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      itemName: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.itemName);
    this.setState({
      itemName: ""
    });
  };

  handleChange = e => {
    this.setState({
      itemName: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          name="item"
          value={this.state.itemName}
        />
        <button type="submit">Add 'todo'</button>
      </form>
    );
  }
}

export default TodoForm;
