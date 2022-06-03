import { useReducer, useState } from "react";
// import TodoForm from "./TodoForm";

const initialTodoState = [];

const ACTIONS = {
  ADD_TASK: "ADD_TASK",
  REMOVE_TASK: "REMOVE_TASK",
  TOGGLE_TASK: "TOGGLE_TASK",
};

const reducer = (state, action) => {
  // can be performed by switch or if blocks
  if (action.type === ACTIONS.ADD_TASK) {
    return [...state, newTask(action.payload.task)];
  }
  if (action.type === ACTIONS.REMOVE_TASK) {
    // some code
  }
  if (action.type === ACTIONS.TOGGLE_TASK) {
    // some code
  }

  return state; // if none of the actions was called, return default state
};

const newTask = (task) => {
  return {
    id: Date.now(),
    task: task,
    completed: false,
  };
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
      <p>todo</p>

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
          <li key={todo.id}>
            <p>{todo.task}</p>
            <button>completed</button> - <button>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
