import React, { createContext } from 'react'
import GameContextInterface from '../interfaces/GameContextInterface'

export const GameContext = createContext<Partial<GameContextInterface>>({
  gameOn: false,
  setGameOn: () => {},
  gameId: '',
  setGameId: () => {},
  playerId: '',
  round: 0,
  setRound: () => {},
  playerOneName: 'Mario',
  playerTwoName: 'Luigi',
  playerOne: true,
  playerTurn: true,
  setPlayerTurn: () => {}
})

export const GameProvider = ({
  children,
  socket,
  gameOn,
  setGameOn,
  gameId,
  setGameId,
  playerId,
  round,
  setRound,
  playerOneName,
  playerTwoName,
  playerOne,
  playerTurn,
  setPlayerTurn
}: GameContextInterface) => {
  

  return (
    <GameContext.Provider value={{
      socket,
      gameOn,
      setGameOn,
      gameId,
      setGameId,
      playerId,
      round,
      setRound,
      playerOneName,
      playerTwoName,
      playerOne,
      playerTurn,
      setPlayerTurn
    }}>
      {children}
    </GameContext.Provider>
  )
}
