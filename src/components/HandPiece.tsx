import React from "react";
import Button from '@mui/material/Button';
import HandPieceInterface from "../interfaces/HandPiece";
import Piece from "./Piece";

const HandPiece = ({
  playerNumber,
  value,
  index,
  game,
  changeSelectedPiece
}: HandPieceInterface) => {
  const { currentPlayer, selectedPieceIndex, gameOn } = game;

  const handleOnClickButton = () => changeSelectedPiece({ index, value })
  
  const selected = playerNumber === currentPlayer && index === selectedPieceIndex
  const enabled = playerNumber === currentPlayer && gameOn

  return (
    <Button disabled={!enabled} onClick={handleOnClickButton}>
      <Piece color={playerNumber} value={value} handPiece disabled={!enabled} selected={selected} />
    </Button>
  )
}

export default HandPiece
