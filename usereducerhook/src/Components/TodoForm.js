import { useState } from "react";

const TodoForm = (props) => {
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // setTask("");
  };

  return (
    <form>
      <input
        type="text"
        value={props.task}
        placeholder="Enter Task"
        name="task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        submit
      </button>

      <p>Task entered: {task}</p>

      {/* value={task} */}
    </form>
  );
};

export default TodoForm;
