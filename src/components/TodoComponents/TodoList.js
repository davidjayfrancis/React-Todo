// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo.js";

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todos.map(todo => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            toggleFinished={props.toggleFinished}
          />
        );
      })}
      <button className="clr-button" onClick={props.clearFinished}>
        Clear todos
      </button>
    </div>
  );
};

export default TodoList;
