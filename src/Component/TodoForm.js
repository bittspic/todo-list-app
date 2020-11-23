import {
  Button,
  FormControl,
  FormControlLabel,
  Input,
} from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    text: "",
    completed: false,
  });

  function handleChange(e) {
    setTodo({ ...todo, text: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.text.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, text: "" });
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <Input type="text" value={todo.text} onChange={handleChange} />
      <Button type="submit"> ADD </Button>
    </form>
  );
}

export default TodoForm;
