import React, { useEffect, useState } from 'react';
import Game from '../components/Game';
import { GameProvider } from './GameContext';

import { io } from 'socket.io-client'
import styles from "../styles/appStyles";
import GameStartInterface from '../interfaces/GameStartInterface';
import TableInterface from '../interfaces/TableInterface';
import Header from './Header';

const App = () => {
  const [socket] = useState(io(process.env.REACT_APP_SERVER_URL as string, {
    withCredentials: true
  }))
  const [gameOn, setGameOn] = useState(false)
  const [gameId, setGameId] = useState('')
  const [playerId, setPlayerId] = useState('')
  const [round, setRound] = useState(0)
  const [playerOneName, setPlayerOneName] = useState('Mario')
  const [playerTwoName, setPlayerTwoName] = useState('Luigi')
  const [newName, setNewName] = useState('')
  const [playerOne, setPlayerOne] = useState(true)
  const [playerTurn, setPlayerTurn] = useState(true)
  const [table, setTable] = useState(Array(9).fill({ value: 0, color: false }))
  const [playerOneHand, setPlayerOneHand] = useState([1, 1, 2, 2, 3, 3])
  const [playerTwoHand, setPlayerTwoHand] = useState([1, 1, 2, 2, 3, 3])
  const [endGameModalOpen, setEndGameModalOpen] = useState(false)
  const [howToPlayModal, setHowToPlayModal] = useState(false)
  const [aboutModal, setAboutModal] = useState(false)

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
    const newPieces = Object.assign([], playerTwoHand);
    newPieces.splice(pieceIndex, 1)
    setPlayerTwoHand(newPieces)
  }

  useEffect(() => {
    socket.on('gameCreated', (data: { gameId: string }) => {
      if (gameOn === true || gameId) return

      setGameId(data.gameId)
    })

    socket.on('gameStart', (data: GameStartInterface) => {
      if (gameOn === true || data.gameId !== gameId) return

      setPlayerOneName(data.playerOne.name)
      setPlayerTwoName(data.playerTwo.name)
      setGameOn(true)
      setRound(data.round)
      setPlayerTurn(data.playerTurn)
    })

    socket.on('error', data => {
      console.log(data)
      window.alert(data.message)
      if (data.status === 'join') {
        setGameId('');
        setPlayerTwoName('Luigi');
      }
    })

    socket.on('connectionTested', data => window.alert(data))
  }, [gameId, gameOn, socket])

  const endGame = () => setEndGameModalOpen(true)

  const returnToHomepage = () => {
    setGameOn(false)
    setGameId('')
    setPlayerOne(true)
    setTable(Array(9).fill({ value: 0, color: false }))
    setPlayerOneHand([1, 1, 2, 2, 3, 3])
    setPlayerTwoHand([1, 1, 2, 2, 3, 3])
    setEndGameModalOpen(false)
  }

  const newGameStart = (playerTurn: boolean) => {
    setRound(1)
    setPlayerTurn(playerTurn)
    setEndGameModalOpen(false)
    setTable(Array(9).fill({ value: 0, color: false }))
    setPlayerOneHand([1, 1, 2, 2, 3, 3])
    setPlayerTwoHand([1, 1, 2, 2, 3, 3])
  }

  const handleUsernameChange = (value: string) => setNewName(value)

  const handleCreateGame = () => {
    const name = newName === '' ? playerOneName : newName
    setPlayerId(socket.id)
    socket.emit('createGame', { playerOne: {
      name: name,
      id: socket.id
    } })
  }

  const handleJoinGame = () => {
    const joinGameId: string = (document.getElementById('join-game-input') as HTMLInputElement).value

    const name = newName === '' ? playerTwoName : newName
    setGameId(joinGameId);
    setPlayerId(socket.id);
    setPlayerOne(false);

    socket.emit('joinGame', {
      gameId: joinGameId,
      playerTwo: { name: name, id: socket.id }
    })
  }

  const handleTestConnection = () => {
    socket.emit('testConnection', { id: socket.id })
  }

  if (gameOn) return (
    <GameProvider
      socket={socket}
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
      endGameModalOpen={endGameModalOpen}
      setEndGameModalOpen={setEndGameModalOpen}
      returnToHomepage={returnToHomepage}
      newGameStart={newGameStart}
    >
      <Game
        howToPlayModal={howToPlayModal}
        setHowToPlayModal={setHowToPlayModal}
        handleTestConnection={handleTestConnection}
        aboutModal={aboutModal}
        setAboutModal={setAboutModal}
      />
    </GameProvider>
  )

  if (gameId) return (
    <div style={styles.container}>
      <Header
        howToPlayModal={howToPlayModal}
        setHowToPlayModal={setHowToPlayModal}
        handleTestConnection={handleTestConnection}
        aboutModal={aboutModal}
        setAboutModal={setAboutModal}
      />
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
      <Header
        howToPlayModal={howToPlayModal}
        setHowToPlayModal={setHowToPlayModal}
        handleTestConnection={handleTestConnection}
        aboutModal={aboutModal}
        setAboutModal={setAboutModal}
      />
      <main style={styles.main} id="main">
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
      </main>
    </div>
  )
}

export default App;
