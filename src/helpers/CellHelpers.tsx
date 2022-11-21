export const removePieceFromHand = (
  playerPieces: number[],
  removeMethod: (newPieces: number[]) => void,
  pieceIndex: number
) => {
  const newPieces = Object.assign([], playerPieces);
  newPieces.splice(pieceIndex, 1)
  removeMethod(newPieces)
}
