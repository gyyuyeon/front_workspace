import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef("");

  const wrap = {
    width: "500px",
    border: "1px solid black",
    margin: "10px auto",
  };

  let boardList = [
    { id: 1, todoname: "운동하기", completed: 0 },
    { id: 2, todoname: "SNS꾸미기", completed: 1 },
    { id: 3, todoname: "사진정리하기", completed: 0 },
  ];

  const updateTodo = (id) => {
    setTodos(
      todo.map((todo) => {
        return todo.id === id
          ? { ...todo, completed: todo.completed === 1 ? 0 : 1 }
          : todo;
      })
    );
  };

  //여러개 리스트가 있을때 삭제할때
  const deleteTodo = (id) => {
    //alert(id);
    setTodos(
      todo.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  const insertTodo = (e) => {
    e.preventDefault(); // 기본 이벤트 페이지 바뀌는거 차단
    setTodos((prevState) => {
      return [
        ...prevState,
        { id: todo.length + 1, todoname: input, completed: 0 },
      ];
    });

    setInput("");
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  const [todo, setTodos] = useState([...boardList]);
  const [input, setInput] = useState([""]);

  const handleChangeText = () => {
    setInput(document.querySelector("#work").value);
  };

  return (
    <div className="App" style={wrap}>
      <h1>TODO LIST</h1>
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

      {todo.map((todo) => {
        return (
          <div className="todo" key={todo.id}>
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
          </div>
        );
      })}
    </div>
  );
}

export default App;
