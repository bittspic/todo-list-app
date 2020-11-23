import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";

function Todo({ todo, toggleComplete, deleteTodo }) {
  function handleClickCheckbox() {
    toggleComplete(todo.id);
  }

  function handleDelete() {
    deleteTodo(todo.id);
  }

  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox checked={todo.completed} onClick={handleClickCheckbox} />
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.text}
      </Typography>
      <IconButton onClick={handleDelete}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}

export default Todo;
