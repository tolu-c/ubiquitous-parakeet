import { ACTIONS } from "./Todo";

const TaskItem = ({ todo, dispatch }) => {
  console.log(todo.id);
  const toggleTask = () => {
    dispatch({ type: ACTIONS.TOGGLE_TASK, payload: { id: todo.id } });
  };

  return (
    <li key={todo.id}>
      <p
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.task} - {todo.id}
      </p>
      <button onClick={toggleTask}>completed</button> - <button>delete</button>
    </li>
  );
};

export default TaskItem;
