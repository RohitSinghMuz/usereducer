import React, { useReducer } from "react";

const initialstate = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return {
        count: state.count + 1,
      };
    case "Decrement":
      return {
        count: state.count - 1,
      };
    default:
      return null;
  }
};

const Medium = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <>
      <div style={{ width: "50%", margin: "10px auto" }}>
        <h2 style={{ padding: "10px", margin: "10px" }}>{state.count}</h2>
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

export default Medium;
