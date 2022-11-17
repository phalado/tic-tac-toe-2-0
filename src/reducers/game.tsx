const game = (
  state: any = {},
  action: { type: string, selectedPiece: { index: number, value: number } }
) => {
  switch (action.type) {
    case "CHANGE_CURRENT_PLAYER":
      return {
        ...state,
        currentPlayer: !state.currentPlayer,
        selectedPieceIndex: -1,
        selectedPieceValue: -1
      }
    case "CHANGE_SELECTED_PIECE":
      return {
        ...state,
        selectedPieceIndex: action.selectedPiece.index,
        selectedPieceValue: action.selectedPiece.value
      }
    case "END_GAME":
      return {
        ...state,
        gameOn: false
      }
    default:
      return state;
  }
};

export default game;
