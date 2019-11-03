import React from "react";
import Todo from "./components/TodoComponents/Todo.js";
import TodoForm from "./components/TodoComponents/TodoForm.js";
import TodoList from "./components/TodoComponents/TodoList.js";
import "./components/TodoComponents/Todo.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      // list of objects
      todos: [
        {
          id: Date.now(),
          todo: "Add some todos!",
          finished: false
        }
      ]
    };
  }

  addItem = itemName => {
    console.log("Adding item: ", itemName);
    if (itemName.length === 0) {
      return;
    }
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

  clearFinished = () => {
    console.log("Clear button clicked!");
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.finished === false;
      })
    });
  };

  toggleFinished = todoId => {
    console.log("Finished: ", todoId);

    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            finished: !todo.finished
          };
        }
        return todo;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <h2>Welcome to David's Magical Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList
          toggleFinished={this.toggleFinished}
          clearFinished={this.clearFinished}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
