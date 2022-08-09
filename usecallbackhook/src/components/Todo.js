import { memo } from "react";

const Todo = ({ todo, addTodo }) => {
  console.log("Child Render");

  return (
    <div>
      <h2>My Todo</h2>
      {todo.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default memo(Todo);
