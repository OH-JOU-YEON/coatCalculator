import "./App.css";
import GetTemp from "./GetTemp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className="coatTitle" onClick={GetTemp}>
          성수동 코트 계산기
        </button>
      </header>
    </div>
  );
}

export default App;
