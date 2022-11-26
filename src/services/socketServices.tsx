import { io, Socket } from 'socket.io-client'

const socket: Socket = io(process.env.REACT_APP_SERVER_URL + ":" + process.env.REACT_APP_SERVER_PORT)

export const submitNewMove = (
  round: number, player: boolean, pieceIndex: number, pieceValue: number, cell: number, gameId: string
) => {
  
  console.log(round, player, pieceIndex, pieceValue, cell, gameId)
  socket.emit('move', { round, player, pieceIndex, pieceValue, cell, gameId })
}