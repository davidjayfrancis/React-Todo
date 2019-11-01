import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("rendering form...");
    return <p>HELLO FROM Todo.js!{this.props.message}</p>;
  }
}

export default Todo;
