import GameInterface from "./GameInterface"

export default interface HandPieceInterface {
  playerNumber: boolean
  value: number
  index: number
  game: GameInterface
  changeSelectedPiece: ({ index, value }: { index: number, value: number }) => void
}
