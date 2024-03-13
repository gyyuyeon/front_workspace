import React from "react";

const Label1 = (props) => {
  const { todo, updateTodo, deleteTodo } = props;
  return (
    <>
      <h3>
        <label
          className={todo.completed === 1 ? "completed" : null}
          onClick={() => updateTodo(todo.id)}
        >
          {todo.todoname}
        </label>
        &nbsp;&nbsp;
        <button onClick={() => deleteTodo(todo.id)}>삭제</button>
      </h3>
    </>
  );
};

export default Label1;
