import React from "react";
import { checkEndGame } from "../helpers/Gamehelpers";
import CellInterface from "../interfaces/CellInterface";
import TableInterface from "../interfaces/TableInterface";

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
  const { currentPlayer, selectedPieceValue, selectedPieceIndex, gameOn } = game

  const clickable = selectedPieceValue > value && gameOn
  
  const fillingValue = () => {
    if (value === 0) return null

    return <Piece color={color} value={value} />
  }

  const handleClickingCell = () => {
    (table as TableInterface[])[index] = { value: selectedPieceValue, color: currentPlayer }
    changeTableState(table as TableInterface[])
    if (currentPlayer) {
      playerOne.pieces.splice(selectedPieceIndex, 1)
      removePieceFromHandOne(playerOne.pieces)
    } else {
      playerTwo.pieces.splice(selectedPieceIndex, 1)
      removePieceFromHandTwo(playerTwo.pieces)
    }
    if (checkEndGame(table as TableInterface[])) {
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
