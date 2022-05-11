import "./App.css";
import Tile, { TileStatus } from "./Tile";

function App() {
  return (
    <div className="App">
      <Tile status={TileStatus.CORRECT} letter="A" />
    </div>
  );
}

export default App;
