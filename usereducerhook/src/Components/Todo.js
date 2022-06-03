import { useReducer, useState } from "react";
// import TodoForm from "./TodoForm";

const initialTodoState = [];

const ACTIONS = {
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
  if (action.type === ACTIONS.REMOVE_TASK) {
    // some code
  }

  if (action.type === ACTIONS.TOGGLE_TASK) {
    // console.log(state);
    return state.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
  }

  return state; // if none of the actions was called, return default state
};

const Todo = () => {
  const [task, setTask] = useState("");
  const [todoState, dispatchTodoAction] = useReducer(reducer, initialTodoState);

  const toggleTask = (id) => {
    // console.log(id);
    dispatchTodoAction({
      type: ACTIONS.TOGGLE_TASK,
      payload: { id: id },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatchTodoAction({
      type: ACTIONS.ADD_TASK,
      payload: { task: task },
    });

    setTask(""); // clears input field after submission
  };

  // console.log(todoState);

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
          <li key={todo.id}>
            <p
              style={{ textDecoration: todo.completed ? "underline" : "none" }}
            >
              {todo.task}
            </p>
            <button onClick={toggleTask(todo.id)}>completed</button> -{" "}
            <button>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
