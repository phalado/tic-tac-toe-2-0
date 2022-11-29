import React, { useEffect, useState } from 'react';
import Game from '../components/Game';
import { GameProvider } from './GameContext';

import { io, Socket } from 'socket.io-client'
import styles from "../styles/appStyles";
import GameStartInterface from '../interfaces/GameStartInterface';
import TableInterface from '../interfaces/TableInterface';

// const url = process.env.REACT_APP_SERVER_URL + ":" + process.env.REACT_APP_SERVER_PORT
const socket: Socket = io()

const App = () => {
  const [gameOn, setGameOn] = useState(false)
  const [gameId, setGameId] = useState('')
  const [playerId, setPlayerId] = useState('')
  const [round, setRound] = useState(0)
  const [playerOneName, setPlayerOneName] = useState('Mario')
  const [playerTwoName, setPlayerTwoName] = useState('Luigi')
  const [playerOne, setPlaerOne] = useState(true)
  const [playerTurn, setPlayerTurn] = useState(true)
  const [table, setTable] = useState(Array(9).fill({ value: 0, color: false }))
  const [playerOneHand, setPlayerOneHand] = useState([1, 1, 2, 2, 3, 3])
  const [playerTwoHand, setPlayerTwoHand] = useState([1, 1, 2, 2, 3, 3])

  const updateTable = (cell: number, value: number, color: boolean) => {
    const newTable: TableInterface[] = Object.assign([], table);
    newTable[cell] = { value: value, color: color }
    setTable(newTable)
  }

  const removePieceFromHandOne = (pieceIndex: number) => {
    const newPieces = Object.assign([], playerOneHand);
    newPieces.splice(pieceIndex, 1)
    setPlayerOneHand(newPieces)
  }

  const removePieceFromHandTwo = (pieceIndex: number) => {
    console.log(pieceIndex)
    const newPieces = Object.assign([], playerTwoHand);
    newPieces.splice(pieceIndex, 1)
    setPlayerTwoHand(newPieces)
  }

  useEffect(() => {
    socket.on('gameCreated', (data: { gameId: string, playerId: string }) => {
      if (gameOn === true || gameId) return

      setGameId(data.gameId)
      setPlayerId(data.playerId)
    })

    socket.on('gameStart', (data: GameStartInterface) => {
      if (gameOn === true || data.gameId !== gameId) return

      setPlayerOneName(data.playerOne)
      setPlayerTwoName(data.playerTwo)
      setGameOn(true)
      setRound(data.round)
      setPlayerTurn(data.playerTurn)
    })

    socket.on('connectionTested', data => console.log(data))
  }, [gameId, gameOn])

  const endGame = () => setGameOn(false);

  const handleUsernameChange = (value: string) => setPlayerOneName(value)

  const handleCreateGame = () => socket.emit('createGame', { playerOne: playerOneName })

  const handleJoinGame = () => {
    const joinGameId: string = (document.getElementById('join-game-input') as HTMLInputElement).value

    setGameId(joinGameId);
    setPlayerId(joinGameId + 'B');
    setPlayerTwoName(playerOneName);
    setPlayerOneName('Mario');
    setPlaerOne(false);
    socket.emit('joinGame', { gameId: joinGameId, playerTwo: playerOneName })
  }

  const handleTestConnection = () => {
    console.log(process.env.REACT_APP_SERVER_URL + ":" + process.env.REACT_APP_SERVER_PORT)
    socket.emit('testConnection')
  }

  if (gameOn) return (
    <GameProvider
      gameOn={gameOn}
      setGameOn={setGameOn}
      gameId={gameId}
      setGameId={setGameId}
      playerId={playerId}
      round={round}
      setRound={setRound}
      playerOneName={playerOneName}
      playerTwoName={playerTwoName}
      playerOne={playerOne}
      playerTurn={playerTurn}
      setPlayerTurn={setPlayerTurn}
      table={table}
      playerOneHand={playerOneHand}
      playerTwoHand={playerTwoHand}
      updateTable={updateTable}
      removePieceFromHandOne={removePieceFromHandOne}
      removePieceFromHandTwo={removePieceFromHandTwo}
      endGame={endGame}
    >
      <Game />
    </GameProvider>
  )

  if (gameId) return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Tic-Tac-Toe 2.0</h1>
      </header>
      <main style={styles.main}>
        <div>
          <h1 style={styles.waitingTitle}>
            Game ID: <span style={styles.gameId}>{gameId}</span>
          </h1>
        </div>
        <h1 style={styles.waitingTitle}>Waiting for player 2's conection</h1>
      </main>
    </div>
  )

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Tic-Tac-Toe 2.0</h1>
      </header>
      <main style={styles.main}>
        <div style={styles.usernameContainer}>
          <h2 style={styles.label}>Change username: </h2>
          <input
            defaultValue={playerOneName}
            style={styles.input}
            onChange={e => handleUsernameChange(e.target.value)}
            title='Just type here your new username'
          />
        </div>
        <button style={styles.button} onClick={handleCreateGame}>Create Game</button>
        <div style={styles.joinGameContainer}>
          <button style={styles.button} onClick={handleJoinGame}>Join Game</button>
          <input
            style={styles.input}
            title="Type here your friend's game ID"
            placeholder='Game ID'
            id='join-game-input'
          />
        </div>
        <button style={styles.button} onClick={handleTestConnection}>Test Connection</button>
      </main>
    </div>
  )
}

export default App;
