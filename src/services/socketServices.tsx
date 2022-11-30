import { Socket } from 'socket.io-client'

export const submitNewMove = (
  socket: Socket,
  round: number,
  player: boolean,
  pieceIndex: number,
  pieceValue: number,
  cell: number,
  gameId: string
) => {
  socket.emit('move', { round, player, pieceIndex, pieceValue, cell, gameId })
}