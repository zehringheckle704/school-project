import { useState } from "react";

function App() {
  const [state, setState] = useState(0);

  function incrementCounter() {
    setState(prevState => prevState + 1);
  }

  return (
    <div>
      <h1>Count: {state}</h1>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default App;
