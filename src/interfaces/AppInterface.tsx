import GameInterface from "./GameInterface";
import TableInterface from "./TableInterface";

export default interface AppInterface {
  game: GameInterface
  table: TableInterface[]
  playerOne: { username: string, pieces: number[] }
  playerTwo: { username: string, pieces: number[] }
  changeTableState: (data: TableInterface[]) => void
  changeCurrentPlayer: () => void
  removePieceFromHandOne: (pieces: number[]) => void
  removePieceFromHandTwo: (pieces: number[]) => void
  endGame: () => void
}
