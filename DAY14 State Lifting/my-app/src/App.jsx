import { useState } from "react";
import CounterButton from "./Components/CounterButton";
import "./App.css"; // external css

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handlereset = () => setCount(0);

  return (
    <div className="app-container">
      <p className="paragraph"> <span className="heading">State Lifting</span> is a React pattern where you move state
        from child components up to their common parent component. This allows multiple
        child components to share and modify the same state.</p>
      <p className="paragraph">Instead of each CounterButton having its own separate counter state, State has been lifted up to App.
        <br />  This means: <br />
        All buttons share the same count value <br />
        When any button is clicked, it affects the same shared state <br />
        The count display updates regardless of which button was pressed</p>
      <h1>Count: {count}</h1>

      {/* Reusable buttons */}
      <CounterButton label="Increment" onClick={handleIncrement} />
      <CounterButton label="Decrement" onClick={handleDecrement} />
      <CounterButton label="Reset" onClick={handlereset} />
    </div>
  );
}

export default App;
