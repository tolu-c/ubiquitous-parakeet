import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todo, setTodo] = useState([]);

  const addTodo = (newTodo) => {
    setTodo((prevTodo) => [...prevTodo, newTodo]);
  };
  console.log({ todo });

  return (
    <div>
      <TodoForm onAddTodo={addTodo} />
      <hr />
      {todo.length === 0
        ? "No Todo Found. Click to add new todo."
        : todo.map((todoItem, index) => {
            return <TodoItem key={index} todoItem={todoItem} />;
          })}
    </div>
  );
};

export default Todo;
