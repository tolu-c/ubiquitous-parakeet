import { useReducer } from "react";

const initialCountState = {
  count: 0, // sets the initial value of count to 0
};

const ACTIONS = {
  ADD: "add",
  SUBTRACT: "subtract",
};

const reducer = (state, action) => {
  if (action.type === ACTIONS.ADD) {
    return {
      count: state.count + 1,
    };
  }

  if (action.type === ACTIONS.SUBTRACT) {
    return {
      count: state.count - 1,
    };
  }

  return state;
};

function App() {
  const [countState, dispatchCountAction] = useReducer(
    reducer,
    initialCountState
  );

  const addCount = () => {
    dispatchCountAction({
      type: ACTIONS.ADD,
    });
  };

  const minusCount = () => {
    dispatchCountAction({ type: ACTIONS.SUBTRACT });
  };

  return (
    <div className="App">
      <h4>Count function using the useReducer Hook</h4>
      <button onClick={addCount}>+</button>
      <p>Count : {countState.count}</p>
      <button onClick={minusCount}>-</button>
    </div>
  );
}

export default App;
