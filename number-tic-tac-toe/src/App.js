import GameState from "./context/game/gameState";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <GameState>
        <Home />
      </GameState>
    </div>
  );
}

export default App;
