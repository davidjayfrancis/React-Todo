import React from "react";
import Todo from "./components/TodoComponents/Todo.js";
import TodoForm from "./components/TodoComponents/TodoForm.js";
import TodoList from "./components/TodoComponents/TodoList.js";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      // list of objects
      todos: []
    };
  }

  addItem = itemName => {
    console.log("Adding item: ", itemName);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: Date.now(),
          todo: itemName,
          finished: false
        }
      ]
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        {this.state.todos.map(todo => {
          return <Todo todo={todo.todo} />;
        })}
        {}
      </div>
    );
  }
}

export default App;
