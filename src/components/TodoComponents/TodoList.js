// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo.js";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todo-list">
        {this.props.todos.map(todo => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              toggleFinished={this.props.toggleFinished}
            />
          );
        })}
        <button className="clr-button" onClick={this.props.clearFinished}>
          Clear todos
        </button>
      </div>
    );
  }
}

export default TodoList;
