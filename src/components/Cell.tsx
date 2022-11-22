import React from "react";
import { removePieceFromHand } from "../helpers/CellHelpers";
import { checkEndGame } from "../helpers/Gamehelpers";
import CellInterface from "../interfaces/CellInterface";
import TableInterface from "../interfaces/TableInterface";
import { submitNewMove } from "../services/socketServices";

import styles from "../styles/cellStyles";
import Piece from "./Piece";

const Cell = ({
  color,
  value,
  index,
  game,
  table,
  playerOne,
  playerTwo,
  changeTableState,
  changeCurrentPlayer,
  removePieceFromHandOne,
  removePieceFromHandTwo,
  endGame
}: CellInterface) => {
  const { playerTurn, selectedPieceValue, selectedPieceIndex, gameOn, round, gameId } = game

  const clickable = selectedPieceValue > value && gameOn
  
  const fillingValue = () => {
    if (value === 0) return null

    return <Piece color={color} value={value} />
  }

  const handleClickingCell = () => {
    const newTable: TableInterface[] = Object.assign([], table);
    newTable[index] = { value: selectedPieceValue, color: playerTurn }
    changeTableState(newTable)

    if (playerTurn) {
      removePieceFromHand(playerOne.pieces, removePieceFromHandOne, selectedPieceIndex)
    } else {
      removePieceFromHand(playerTwo.pieces, removePieceFromHandTwo, selectedPieceIndex)
    }

    submitNewMove(round, playerTurn, selectedPieceIndex, selectedPieceValue, index, gameId)
    
    if (checkEndGame(newTable)) {
      console.log("Fim de Jogo")
      endGame()
    } else changeCurrentPlayer()
  }

  if (clickable) {
    return (
      <div style={{ ...styles.container, ...styles.clickable }} onClick={handleClickingCell}>
        {fillingValue()}
      </div>
    )
  }

  return <div style={styles.container}>{value > 0 && fillingValue()}</div>
}

export default Cell;
