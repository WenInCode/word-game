import { ReactElement } from "react";
import "./Tile.css";

interface TileProps {
  letter?: string;
}

function Tile({ letter }: TileProps): ReactElement {
  return <div className="Tile">{letter}</div>;
}

export default Tile;
