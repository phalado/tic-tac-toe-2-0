import React from "react";
import PieceInterface from "../interfaces/PieceInterface";
import styles from "../styles/pieceStyles";

const Piece = ({ color, value, handPiece, disabled, selected }: PieceInterface) => {
  const colorStyle = color ? styles.bluePiece : styles.redPiece
  let pieceStyles = {}

  let size: number | string = handPiece ? 15 : 50
  size = (size + value * 25).toString() + "px"

  pieceStyles = { ...styles.common, ...colorStyle, width: size, height: size }

  if (selected) pieceStyles = { ...pieceStyles, ...styles.selected }
  if (disabled) pieceStyles = { ...pieceStyles, ...styles.disabled }

  const imagesSrcs = [
    './assets/images/coffee-lvl-1.png',
    './assets/images/coffee-lvl-2.png',
    './assets/images/coffee-lvl-3.png'
  ]

  const level = ["Jr", "Mid", "Sr"]

  return (
    <div style={pieceStyles} title={"Level " + value + ": " + level[value - 1]}>
      <img  style={styles.coffeeImage} src={imagesSrcs[value - 1]} alt={"Coffee level " + value} />
    </div>
  )
}

export default Piece
