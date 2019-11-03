import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = e => {
    console.log(
      "You clicked '" + this.props.todo.todo + "'. " + e.target.className
    );

    this.props.toggleFinished(this.props.todo.id);
  };

  render() {
    console.log("rendering form...");

    let verboseClassName = "todo";
    if (this.props.todo.finished) {
      verboseClassName += " finished";
    }

    return (
      <div className={verboseClassName} onClick={this.handleClick}>
        <p>{this.props.todo.todo}</p>
      </div>
    );
  }
}

export default Todo;
