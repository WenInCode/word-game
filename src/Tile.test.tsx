import { render, screen } from "@testing-library/react";
import App from "./App";
import Tile from "./Tile";

test("Renders the tile", () => {
  render(<Tile />);
  expect(true).toBeTruthy();
});
