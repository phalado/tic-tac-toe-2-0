import React, { useEffect } from 'react';
import Player from '../containers/Player';
import Table from '../containers/Table';
import { io } from 'socket.io-client'

import styles from "../styles/appStyles";
import { removePieceFromHand } from '../helpers/CellHelpers';
import AppInterface from '../interfaces/AppInterface';
import TableInterface from '../interfaces/TableInterface';
import { checkEndGame } from '../helpers/Gamehelpers';

const socket:any = io('http://localhost:1337')

interface NewMoveInterface {
  gameId: string
  round: number
  player: boolean
  piece: number
  cell: number
}

const App = ({
  game,
  table,
  playerOne,
  playerTwo,
  changeTableState,
  removePieceFromHandOne,
  removePieceFromHandTwo,
  changeCurrentPlayer,
  endGame,
}: AppInterface) => {
  const { gameId, round } = game
  // const [endGameModal, setEndGameModal] = useState(false)

  useEffect(() => {
    socket.on('newMove', (data: NewMoveInterface) => {
      console.log(data)
      if (data.gameId !== gameId || data.round === round) return

      const { player, piece, cell } = data
      const newTable: TableInterface[] = Object.assign([], table);
      newTable[cell] = { value: piece, color: player }
      changeTableState(newTable)

      if (player === true) {
        removePieceFromHand(playerOne.pieces, removePieceFromHandOne, piece)
      } else {
        removePieceFromHand(playerTwo.pieces, removePieceFromHandTwo, piece)
      }

      if (checkEndGame(newTable)) {
        console.log("Fim de Jogo")
        endGame()
      } else changeCurrentPlayer()

      console.log(data);
      socket.emit('received', { message: 'thx for the message' })
    })
  }, [
    gameId,
    round,
    changeTableState,
    playerOne,
    playerTwo,
    removePieceFromHandOne,
    removePieceFromHandTwo,
    table,
    changeCurrentPlayer,
    endGame
  ])

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Tic-Tac-Toe 2.0</h1>
      </header>
      <main style={styles.main}>
        <Player playerNumber={true} />
        <Table />
        <Player playerNumber={false} />
        {/* <EndGameModal endGameModalOpen={endGameModalOpen} /> */}
      </main>
    </div>
  )
}

export default App;
