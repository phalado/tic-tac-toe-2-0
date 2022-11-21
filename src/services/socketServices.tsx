import { io } from 'socket.io-client'

const socket:any = io('http://localhost:1337')

export const submitNewMove = (
  round: number, player: boolean, piece: number, cell: number, gameId: string
) => {
  socket.emit('move', { round, player, piece, cell, gameId })
}