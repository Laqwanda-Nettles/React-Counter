import { useState } from "react";

export default function Counter() {
  //state to track current count
  const [count, setCount] = useState(0);
  // state to store custom increment/decrement value
  const [number, setNumber] = useState(1);

  //Increment count by custom value
  function handleIncrement() {
    setCount(count + number);
  }

  //Decrement count, only if the result is not a negative value
  function handleDecrement() {
    if (count - number >= 0) {
      setCount(count - number);
    }
  }

  // Reset count back to zero
  function handleReset() {
    setCount(0);
  }

  // Update custom number based on input value
  function handleInput(event) {
    const value = event.target.value;
    // If the input is empty, set number to an empty string, otherwise parse it as an integer
    setNumber(value === "" ? "" : parseInt(value, 10));
  }

  return (
    <div style={{ margin: 20, padding: 15, textAlign: "center" }}>
      <h1>Let's Count!</h1>
      <p style={{ fontSize: 45, color: "gold", fontWeight: "bold" }}>{count}</p>
      <button
        onClick={handleIncrement}
        style={{
          fontSize: 25,
          padding: 5,
          margin: 10,
          backgroundColor: "green",
        }}
      >
        +
      </button>
      <button
        onClick={handleDecrement}
        style={{
          fontSize: 25,
          padding: 5,
          margin: 10,
          backgroundColor: "indianRed",
        }}
      >
        -
      </button>
      <button
        onClick={handleReset}
        style={{
          fontSize: 25,
          padding: 5,
          margin: 10,
          backgroundColor: "cornflowerBlue",
        }}
      >
        Reset
      </button>
      <br />
      <label style={{ fontSize: 20, padding: 10 }}>
        Custom Increment/Decrement:
        <br />
        <input
          type="number"
          value={number}
          onChange={handleInput}
          placeholder="Enter a number"
          style={{
            fontSize: 18,
            margin: 10,
            padding: 3,
            textAlign: "center",
          }}
        />
      </label>
    </div>
  );
}
