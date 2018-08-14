import { modal } from "..";
import { openModal, closeModal, selectOption } from "../../routines";

describe("reducers: modal", () => {
  const initialState = {
    open: false,
    options: [
      "Module",
      "Connection",
      "Global Connection",
      "NLU - Bot training",
      "Channels"
    ],
    geometrics: ["circle", "triangle", "square", "pentagon", "hexagon"],
    colors: ["red", "blue", "orange", "yellow", "purple"],
    step: 0,
    selectedOption: 0
  };

  it("should provide the initial state", () => {
    expect(modal(undefined, {})).toEqual(initialState);
  });

  it("should handle the openModal.TRIGGER action", () => {
    expect(modal(initialState, { type: openModal.TRIGGER })).toEqual({
      ...initialState,
      open: true
    });
  });

  it("should handle the closeModal.TRIGGER action", () => {
    expect(modal(initialState, { type: closeModal.TRIGGER })).toEqual({
      ...initialState,
      open: false
    });
  });

  it("should handle the selectOption.TRIGGER action", () => {
    const selectedOption = 1;
    expect(
      modal(initialState, {
        type: selectOption.TRIGGER,
        payload: selectedOption
      })
    ).toEqual({
      ...initialState,
      selectedOption: selectedOption
    });
  });
});
