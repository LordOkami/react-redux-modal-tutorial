const initialState = { open: false };

export const modal = (state = initialState, { type }) => {
  switch (type) {
    case "OPEN":
      return {
        ...state,
        open: true
      };
    default:
      return state;
  }
};
