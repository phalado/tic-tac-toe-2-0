export default interface HandPieceInterface {
  playerNumber: boolean,
  value: number,
  index: number,
  game: {
    currentPlayer: boolean,
    selectedPieceIndex: number,
    gameOn: true
  },
  changeSelectedPiece: ({ index, value }: { index: number, value: number }) => void
}
