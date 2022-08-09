import { useCallback, useState } from "react";
import Todo from "./components/Todo";

const App = () => {
  const [count, setCount] = useState(0);
  const [todoList, setTodoList] = useState([]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const addTodo = useCallback(() => {
    setTodoList((prevTodo) => [...prevTodo, "New Default Todo"]);
  }, []);

  return (
    <div>
      <Todo todo={todoList} addTodo={addTodo} />
      <hr />
      <div>
        count: {count}
        <br />
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default App;
