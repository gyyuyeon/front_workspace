import axios from "axios";
import { getTodoAction } from "./todoSlice";

function getTodos() {
  return async (dispatch) => {
    //백엔드 요청
    const data = await axios
      .get(`/todo/all`)
      .then((response) => {
        console.log("response:", response);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("data:", data);
    dispatch(getTodoAction({ data }));
  };
}

function insertTodo(input) {
  return async () => {
    //백엔드 요청
    await axios
      .post(`/todo`, { todoname: input })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

function updateTodo(id, completed) {
  return async () => {
    // let completed = todos.filter((todo) => todo.id === id)[0].completed;
    await axios
      .put(`/todo/${id}/${completed}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

function deleteTodo(id) {
  return async () => {
    await axios
      .delete(`/todo/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export const todoAction = { getTodos, insertTodo, updateTodo, deleteTodo };
