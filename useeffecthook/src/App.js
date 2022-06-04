import { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // increment the count every 2 seconds
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  }, []);

  return (
    <div>
      <p>You have rendered {count} times.</p>
    </div>
  );
};

export default App;
