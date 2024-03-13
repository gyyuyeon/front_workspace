import React, { useRef, useState } from "react";
import { todoAction } from "../toolkit/action";
import { useDispatch } from "react-redux";
const Input4 = () => {
  const inputRef = useRef();
  const [input, setInput] = useState("");

  const handleChangeText = () => {
    setInput(document.querySelector("#work").value);
  };

  const dispatch = useDispatch();

  const insertTodo = async (e) => {
    e.preventDefault();

    await dispatch(todoAction.insertTodo(input));
    setInput("");

    await dispatch(todoAction.getTodos());
  };

  return (
    <>
      <form onSubmit={insertTodo}>
        <input
          type="text"
          value={input}
          ref={inputRef}
          id="work"
          placeholder="오늘의 할일" // 기본적으로 뜰꺼
          onChange={handleChangeText}
        />
        <input type="submit" value="Create" />
      </form>
    </>
  );
};

export default Input4;
