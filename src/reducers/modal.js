import { openModal, closeModal, selectOption } from "../routines";

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
  selectedOption: 0
};

export const modal = (state = initialState, { type, payload }) => {
  switch (type) {
    case openModal.TRIGGER:
      return {
        ...state,
        open: true
      };
    case closeModal.TRIGGER:
      return {
        ...state,
        open: false
      };
    case selectOption.TRIGGER:
      return {
        ...state,
        selectedOption: payload
      };
    default:
      return state;
  }
};
