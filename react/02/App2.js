import { useEffect, useRef, useState } from "react";
import Input1 from "./components/input1";
import Todo1 from "./components/todo1";
import axios from "axios";
// db연동
/*
비동기 처리
AJAX, fetch, axios

axios설치
npm install axios

axios import
import axios from 'axios';

axios 동기화
async()=>{
    await axios.get().then().catch();
    console.log('program');
}

*/

const App2 = () => {
  const inputRef = useRef("");

  const wrap = {
    width: "500px",
    border: "1px solid black",
    margin: "10px auto",
  };

  //   let boardList = [
  //     { id: 1, todoname: "운동하기", completed: 0 },
  //     { id: 2, todoname: "SNS꾸미기", completed: 1 },
  //     { id: 3, todoname: "사진정리하기", completed: 0 },
  //   ];

  //   const updateTodo = (id) => {
  //     setTodos(
  //       todos.map((todo) => {
  //         return todo.id === id
  //           ? { ...todo, completed: todo.completed === 1 ? 0 : 1 }
  //           : todo;
  //       })
  //     );
  //   };

  const updateTodo = async (id) => {
    let completed = todos.filter((todo) => todo.id === id)[0].completed;
    await axios
      .put(`/todo/${id}/${completed}`)
      .then((response) => {
        console.log(response);
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //여러개 리스트가 있을때 삭제할때
  //기존
  //   const deleteTodo = (id) => {
  //     //alert(id);
  //     setTodos(
  //       todos.filter((todo) => {
  //         return todo.id !== id;
  //       })
  //     );
  //   };

  const deleteTodo = async (id) => {
    await axios
      .delete(`/todo/${id}`)
      .then((response) => {
        console.log(response);
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });

    // setTodos(
    //   todos.filter((todo) => {
    //     return todo.id !== id;
    //   })
    // );
  };

  // 기존
  //   const insertTodo = (e) => {
  //     e.preventDefault(); // 기본 이벤트 페이지 바뀌는거 차단
  //     setTodos((prevState) => {
  //       return [
  //         ...prevState,
  //         { id: todos.length + 1, todoname: input, completed: 0 },
  //       ];
  //     });

  //     setInput("");
  //   };

  //db
  const insertTodo = async (e) => {
    e.preventDefault();
    await axios
      .post(`/todo`, { todoname: input })
      .then((response) => {
        //console.log(response.data);
        getTodos();
        setInput("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getTodos = async () => {
    //동기화 처리
    //다 처리가 될때까지 기다리겠다
    await axios
      .get(`/todo/all`)
      .then((response) => {
        //console.log(response);
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //계속 엎데이트되는거 랜더링이 될때마다?
  useEffect(() => {
    getTodos();
    inputRef.current.focus();
  }, []);

  //랜더링이 될때마다?
  useEffect(() => {
    inputRef.current.focus();
  });

  //   const [todo, setTodos] = useState([...boardList]);
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState([""]);

  const handleChangeText = () => {
    setInput(document.querySelector("#work").value);
  };

  return (
    <div className="App" style={wrap}>
      <h1>TODO LIST</h1>

      <Input1
        insertTodo={insertTodo}
        input={input}
        inputRef={inputRef}
        handleChangeText={handleChangeText}
      />

      <Todo1 todo={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App2;
