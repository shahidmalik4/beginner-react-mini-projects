import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <h2 className="mb-4">Counter App</h2>
      <h4 className="mb-3">Count: {count}</h4>

      <div className="d-flex justify-content-center gap-2">
        <button
          className="btn btn-success"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <button
          className="btn btn-danger"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
