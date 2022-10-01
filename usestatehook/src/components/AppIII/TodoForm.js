import { useRef } from "react";

const TodoForm = ({ onAddTodo }) => {
  const todoRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const todoValue = todoRef.current.value;
    onAddTodo(todoValue);
    // clear input
    todoRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <input name="todo" ref={todoRef} />
        <button onClick={submitHandler}>Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
