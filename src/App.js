import Buttons from "./components/Buttons";
import Employees from "./components/Employees";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const handleClick = (e) => {
    if (e.target.value === "Next") {
      if (count >= 0 && count <= 11) {
        setCount(count + 5);
      } else if (count >= 15) {
        setCount(1);
      }
    }

    if (e.target.value === "Back") {
      if (count >1) {
        setCount(count - 5);
      } else if (count <= 1) {
        setCount(16);
      }
    }
  };

  return (
    <div className='App'>
      <div className='frame text-center'>
        <Header/>
        <Employees count={count} />
        <Buttons click={handleClick} count={count} />
      </div>
    </div>
  );
}

export default App;
