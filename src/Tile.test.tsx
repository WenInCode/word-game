import { render, screen } from "@testing-library/react";
import Tile, { TileStatus } from "./Tile";

test("Renders the tile", () => {
  const { rerender } = render(<Tile status={TileStatus.INCOMPLETE} />);

  let tile = screen.getByTestId("Tile");
  expect(tile).toHaveClass("Tile");
  expect(tile).toHaveClass("Incomplete");

  rerender(<Tile status={TileStatus.PRESENT} letter="A" />);

  expect(tile).toHaveTextContent("A");
  expect(tile).toHaveClass("Present");

  rerender(<Tile status={TileStatus.UNUSED} letter="ABC" />);

  expect(tile).toHaveTextContent("A");
  expect(tile).not.toHaveTextContent("ABC");
  expect(tile).toHaveClass("Unused");

  rerender(<Tile status={TileStatus.CORRECT} letter="b" />);

  expect(tile).toHaveTextContent("B");
  expect(tile).toHaveClass("Correct");
});
