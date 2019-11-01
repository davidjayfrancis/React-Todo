// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo.js";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      // list of objects
      todos: []
    };
  }

  render() {
    return <div>heyyy</div>;
  }
}
