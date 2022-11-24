export default interface NewMoveInterface {
  gameId: string
  round: number
  playerTurn: boolean
  player: boolean
  pieceIndex: number
  pieceValue: number
  cell: number
}
