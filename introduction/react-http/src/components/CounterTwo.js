import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state,firstCounter: state.firstCounter + 1 };
    case "decrement":
      return { ...state,firstCounter: state.firstCounter - 1 };
    case "increment5":
      return { ...state,secondCounter: state.secondCounter + 5 };
    case "decrement5":
      return { ...state,secondCounter: state.secondCounter - 5 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div> First Counter - {count.firstCounter} </div>
      <div> Second Counter - {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment5", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement5", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterTwo;
