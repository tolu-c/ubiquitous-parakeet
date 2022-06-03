import { ACTIONS } from "./Todo";

const TaskItem = ({ todo, dispatch }) => {
  const toggleTask = () => {
    dispatch({ type: ACTIONS.TOGGLE_TASK, payload: { id: todo.id } });
  };

  const deleteTask = () => {
    dispatch({ type: ACTIONS.REMOVE_TASK, payload: { id: todo.id } });
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
      <button onClick={toggleTask}>completed</button> -{" "}
      <button onClick={deleteTask}>delete</button>
    </li>
  );
};

export default TaskItem;
