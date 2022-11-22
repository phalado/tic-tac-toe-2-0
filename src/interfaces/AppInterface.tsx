import GameInterface from "./GameInterface"

export default interface AppInterface {
  game: GameInterface
  playerOne: { username: string, pieces: number[] }
  playerTwo: { username: string, pieces: number[] }
  // changeTableState: (data: TableInterface[]) => void
  // changeCurrentPlayer: () => void
  // removePieceFromHandOne: (pieces: number[]) => void
  // removePieceFromHandTwo: (pieces: number[]) => void
  // endGame: () => void
  changeUserNameOne: (userName: string) => void
  changeUserNameTwo: (userName: string) => void
}
