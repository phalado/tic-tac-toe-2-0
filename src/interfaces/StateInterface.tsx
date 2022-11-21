import GameInterface from "./GameInterface"
import { Socket } from 'socket.io-client'

export default interface StateInterface {
  table: {
    value: number
    color: boolean
  }[]
  playerOne: {
    username: string
    pieces: number[]
  }
  playerTwo: {
    username: string
    pieces: number[]
  }
  game: GameInterface
  socket: Socket
}
