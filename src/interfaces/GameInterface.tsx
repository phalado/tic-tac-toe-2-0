export default interface GameInterface {
  gameId: string
  gameOn: boolean
  round: number
  playerTurn: boolean
  player: boolean
  selectedPieceIndex: number
  selectedPieceValue: number
  playerId: string
}
