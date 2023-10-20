import { render } from "@testing-library/react";
import { Home } from ".";

describe("Home Component Tests", () => {
  it("Home render a namePage string", () => {
    expect(render(<Home />).getByText("HomePage")).toBeTruthy();
  });
});
