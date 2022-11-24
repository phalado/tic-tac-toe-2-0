import { io, Socket } from 'socket.io-client'

const socket: Socket = io('http://localhost:1337')

export const submitNewMove = (
  round: number, player: boolean, pieceIndex: number, pieceValue: number, cell: number, gameId: string
) => {
  console.log(round, player, pieceIndex, pieceValue, cell, gameId)
  socket.emit('move', { round, player, pieceIndex, pieceValue, cell, gameId })
}