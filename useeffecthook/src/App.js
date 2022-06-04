import { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    // cleanup
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <p>I have rendered {count} times.</p>
    </div>
  );
};

export default App;
