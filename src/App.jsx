import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="text-center p-8 rounded-lg shadow-md bg-white">
        <h1 className="text-center text-xl mb-8 rounded-lg shadow-md font-bold">
          Count Number
        </h1>
        <p className="text-4xl font-semibold rounded mb-5">{count}</p>
        <div className="space-x-4">
          <button
            onClick={decrement}
            className="px-4 py-2 rounded  bg-red-500 text-black hover:bg-red-600 hover:text-white"
          >
            -
          </button>
          <button
            onClick={reset}
            className="px-4 py-2 rounded  bg-gray-500 text-black hover:bg-gray-600 hover:text-white"
          >
            Reset
          </button>
          <button
            onClick={increment}
            className="px-4 py-2 rounded bg-green-500 text-black hover:bg-green-600 hover:text-white"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
