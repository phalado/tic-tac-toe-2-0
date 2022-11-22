import { io } from 'socket.io-client'

const socket:any = io('http://localhost:1337')

export const submitNewMove = (
  round: number, player: boolean, pieceIndex: number, pieceValue: number, cell: number, gameId: string
) => {
  socket.emit('move', { round, player, pieceIndex, pieceValue, cell, gameId })
}