import { useReducer, useState } from "react";
import TaskItem from "./TaskItem";
// import TodoForm from "./TodoForm";

const initialTodoState = [];

export const ACTIONS = {
  ADD_TASK: "ADD_TASK",
  REMOVE_TASK: "REMOVE_TASK",
  TOGGLE_TASK: "TOGGLE_TASK",
};

const reducer = (state, action) => {
  const newTask = (task) => {
    return {
      id: Date.now(),
      task: task,
      completed: false,
    };
  };

  // can be performed by switch or if blocks
  if (action.type === ACTIONS.ADD_TASK) {
    return [...state, newTask(action.payload.task)];
  }

  if (action.type === ACTIONS.TOGGLE_TASK) {
    return state.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
  }

  if (action.type === ACTIONS.REMOVE_TASK) {
    // filters todo list to show items that are not the one to be removed(the item clicked on)
    return state.filter((todo) => todo.id !== action.payload.id);
  }

  return state; // if none of the actions was called, return default state
};

const Todo = () => {
  const [task, setTask] = useState("");
  const [todoState, dispatchTodoAction] = useReducer(reducer, initialTodoState);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatchTodoAction({
      type: ACTIONS.ADD_TASK,
      payload: { task: task },
    });

    setTask(""); // clears input field after submission
  };

  return (
    <div>
      <p>Add Task</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          placeholder="Enter Task"
          name="task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>

      <hr />
      {/* maps the todoState array to a list of todo items */}
      <ul>
        {todoState.map((todo) => (
          <TaskItem key={todo.id} todo={todo} dispatch={dispatchTodoAction} />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
