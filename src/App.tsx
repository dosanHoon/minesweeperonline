import React from "react";
import "./App.css";
import { MineStoreProvider } from "./stores/MineStore";
import MineMap from "./components/Mine/MineMap";

function App() {
  return (
    <MineStoreProvider>
      <div className="App">
        <header className="App-header">
          <h1>지뢰찾기</h1>
        </header>
        <section>
          <MineMap />
        </section>
      </div>
    </MineStoreProvider>
  );
}

export default App;
