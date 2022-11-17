export const changeCurrentPlayer = () => ({ type: "CHANGE_CURRENT_PLAYER" })

export const changeSelectedPiece = (selectedPiece: number) => ({
  type: "CHANGE_SELECTED_PIECE",
  selectedPiece
})

export const endGame = () => ({ type: "END_GAME" })
