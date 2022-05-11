import { ReactElement } from "react";
import "./Tile.css";

export enum TileStatus {
  INCOMPLETE,
  UNUSED,
  CORRECT,
  PRESENT,
}
interface TileProps {
  status: TileStatus;
  letter?: string;
}

function Tile({ status, letter }: TileProps): ReactElement {
  let displayLetter = "";
  const classNames = ["Tile"];

  switch (status) {
    case TileStatus.UNUSED:
      classNames.push("Unused");
      break;
    case TileStatus.CORRECT:
      classNames.push("Correct");
      break;
    case TileStatus.PRESENT:
      classNames.push("Present");
      break;
    case TileStatus.INCOMPLETE:
    default:
      classNames.push("Incomplete");
      break;
  }

  if (letter && letter?.length > 0) {
    displayLetter = letter[0].toUpperCase();
  }

  return (
    <div className={classNames.join(" ")} data-testid="Tile">
      {displayLetter}
    </div>
  );
}

export default Tile;
