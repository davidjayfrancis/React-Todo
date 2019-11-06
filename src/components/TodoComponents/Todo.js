import React from "react";

const Todo = props => {
  const handleClick = e => {
    console.log("You clicked '" + props.todo.todo + "'. " + e.target.className);

    props.toggleFinished(props.todo.id);
  };

  console.log("rendering form...");

  let verboseClassName = "todo";
  if (props.todo.finished) {
    verboseClassName += " finished";
  }

  return (
    <div className={verboseClassName} onClick={handleClick}>
      <p>{props.todo.todo}</p>
    </div>
  );
};

export default Todo;
