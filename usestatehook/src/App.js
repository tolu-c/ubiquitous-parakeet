import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const addCountByOne = () => setCount((prevCount) => prevCount + 1);

  const minusCountByOne = () => setCount((prevCount) => prevCount - 1);

  return (
    <div>
      <button onClick={addCountByOne}>+1</button>
      <p>Count: {count} </p>
      <button onClick={minusCountByOne}>-1</button>
    </div>
  );
}

export default App;
