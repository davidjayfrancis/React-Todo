import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      itemName: ""
    };
  }

  handleChange = () => {
    return;
  };

  render() {
    return (
      <form>
        <input
          type="text"
          onChange={this.handleChange}
          name="item"
          //   value={this.state.itemName}
        />
      </form>
    );
  }
}

export default TodoForm;
