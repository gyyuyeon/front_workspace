import Label1 from "./label1";

const Todo1 = (props) => {
  const { todo, updateTodo, deleteTodo } = props;
  return (
    <>
      {todo.map((todo) => {
        return (
          <div className="todo" key={todo.id}>
            <Label1
              todo={todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          </div>
        );
      })}
    </>
  );
};

export default Todo1;
