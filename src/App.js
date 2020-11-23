import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./Component/TodoForm";
import TodoList from "./Component/TodoList";

const KEY = "todo-app-key";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem(KEY));
    if (storage) {
      setTodos(storage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="App">
      <Typography variant="h2">Todo list</Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
