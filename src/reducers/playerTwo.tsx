const playerTwo = (state = {}, action: { type: string, pieces: number[] }) => {
  switch (action.type) {
    case "REMOVE_PIECE_FROM_HAND_TWO":
      return {
        ...state,
        pieces: action.pieces
      }
    default:
      return state;
  }
};

export default playerTwo;
