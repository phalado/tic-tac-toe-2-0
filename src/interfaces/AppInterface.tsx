import GameInterface from "./GameInterface"

export default interface AppInterface {
  game: GameInterface
  playerOne: { username: string, pieces: number[] }
  playerTwo: { username: string, pieces: number[] }
  changeUserNameOne: (username: string) => void
  changeUserNameTwo: (username: string) => void
  newGame: (data: { gameId: string, playerId: string }) => void
  startGame: (data: { round: number, playerTurn: boolean }) => void
  changeToPlayerTwo: () => void
}
