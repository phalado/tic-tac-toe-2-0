export default interface GameStartInterface {
  gameId: string
  playerOne: {
    name: string,
    id: string
  }
  playerTwo: {
    name: string,
    id: string
  }
  round: number
  playerTurn: boolean
}
