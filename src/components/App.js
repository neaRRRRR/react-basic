import React, { Component } from "react";

import TodoItem from "./TodoItem";
import todosData from "../todosData";
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  }

  render() {
    const todoData = this.state.todos.map((data) => (
      <TodoItem key={data.id} data={data} handleChange={this.handleChange} />
    ));

    return <div className="todo-list">{todoData}</div>;
  }
}

export default App;
