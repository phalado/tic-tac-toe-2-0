import React, { useEffect } from 'react';
import Player from '../containers/Player';
import Table from '../containers/Table';
import { io } from 'socket.io-client'

import styles from "../styles/gameStyles";
import { removePieceFromHand } from '../helpers/CellHelpers';
import AppInterface from '../interfaces/GameComponentInterface';
import TableInterface from '../interfaces/TableInterface';
import { checkEndGame } from '../helpers/Gamehelpers';

const socket:any = io('http://localhost:1337')

interface NewMoveInterface {
  gameId: string
  round: number
  playerTurn: boolean
  player: boolean
  pieceIndex: number
  pieceValue: number
  cell: number
}

const Game = ({
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
  const { gameId } = game
  let round = game.round
  // const [endGameModal, setEndGameModal] = useState(false)

  useEffect(() => {
    socket.on('newMove', (data: NewMoveInterface) => {
      if (data.gameId !== gameId || data.round <= round) return

      if (game.player !== data.player) {
        const { player, pieceIndex, pieceValue, cell } = data
        const newTable: TableInterface[] = Object.assign([], table);
        newTable[cell] = { value: pieceValue, color: player }
        changeTableState(newTable)

        if (player === true) {
          removePieceFromHand(playerOne.pieces, removePieceFromHandOne, pieceIndex)
        } else {
          removePieceFromHand(playerTwo.pieces, removePieceFromHandTwo, pieceIndex)
        }

        if (checkEndGame(newTable)) {
          console.log("Fim de Jogo")
          endGame()
        } else changeCurrentPlayer()

        round++
      }

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
    endGame,
    game
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

export default Game;
