export default interface PlayerInterface {
  playerNumber: boolean
  playerOne: {
    username: string
    pieces: number[]
  }
  playerTwo: {
    username: string
    pieces: number[]
  }
}