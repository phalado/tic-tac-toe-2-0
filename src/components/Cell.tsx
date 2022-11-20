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
    const newTable: TableInterface[] = Object.assign([], table);
    newTable[index] = { value: selectedPieceValue, color: currentPlayer }
    changeTableState(newTable)
    if (currentPlayer) {
      const newPieces = Object.assign([], playerOne.pieces);
      newPieces.splice(selectedPieceIndex, 1)
      removePieceFromHandOne(newPieces)
    } else {
      const newPieces = Object.assign([], playerTwo.pieces);
      newPieces.splice(selectedPieceIndex, 1)
      removePieceFromHandTwo(newPieces)
    }
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
