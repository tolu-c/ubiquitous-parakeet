import { useMemo, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const addTodo = () => {
    setTodo((prevTodo) => [...prevTodo, "New Todo"]);
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <div>
        <h2>My Todo</h2>
        {todo.map((todoItem, index) => {
          return <p key={index}>{todoItem}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>Increment Count</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
}

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 10000; i++) {
    num += 1;
  }
  return num;
};
