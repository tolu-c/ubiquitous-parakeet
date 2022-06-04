import { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    // calculate the product of the values of count by 2
    setCalculation(count * 2);
  }, [count]); // count becomes a dependency for the calculation to work

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </div>
  );
};

export default App;
