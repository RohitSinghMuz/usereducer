import React, { useReducer } from "react";

const initialstate = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
      return null;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <>
      <div style={{ width: "50%", margin: "10px auto" }}>
        <h2 style={{ padding: "10px", margin: "10px" }}>{state}</h2>
        <button
          style={{ padding: "10px", margin: "10px" }}
          onClick={() => dispatch({ type: "Increment" })}
        >
          Increment
        </button>
        <button
          style={{ padding: "10px", margin: "10px" }}
          onClick={() => dispatch({ type: "Decrement" })}
        >
          Decrement
        </button>
      </div>
    </>
  );
};

export default Reducer;
