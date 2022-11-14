import Buttons from "./components/Buttons";
import Employees from "./components/Employees";
import Header from "./components/Header";

function App() {
  return (
    <div className='App'>
      <div className='frame text-center'>
        <Header />
        <Employees />
        <Buttons />
      </div>
    </div>
  );
}

export default App;
