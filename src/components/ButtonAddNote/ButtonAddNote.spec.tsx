import { render, fireEvent } from "@testing-library/react";
import { ButtonAddNote } from "./ButtonAddNote";

import { useNotes } from "@hooks/useNotes";
import { useModal } from "@hooks/useModal";

jest.mock("@hooks/useNotes");
jest.mock("@hooks/useModal");

describe("ButtonAddNote Component Tests", () => {
  const createNoteTemplate = jest.fn();
  const openModal = jest.fn(useModal);

  (useNotes as jest.Mock).mockReturnValue({ createNoteTemplate });
  (useModal as jest.Mock).mockReturnValue({ openModal });

  it("should button click works", () => {
    const { getByText, getByAltText } = render(<ButtonAddNote />);

    expect(
      getByAltText("Uma imagem de um simbolo de positivo")
    ).toBeInTheDocument();

    expect(getByText("Add Note")).toBeInTheDocument();
  });

  it("should button elements render", () => {
    const { getByText } = render(<ButtonAddNote />);

    fireEvent.click(getByText("Add Note"));

    expect(createNoteTemplate).toHaveBeenCalled();
    expect(openModal).toHaveBeenCalled();
  });
});
