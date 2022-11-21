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
  const { playerTurn, selectedPieceIndex, gameOn } = game;

  const handleOnClickButton = () => changeSelectedPiece({ index, value })
  
  const selected = playerNumber === playerTurn && index === selectedPieceIndex
  const enabled = playerNumber === playerTurn && gameOn

  return (
    <Button disabled={!enabled} onClick={handleOnClickButton}>
      <Piece color={playerNumber} value={value} handPiece disabled={!enabled} selected={selected} />
    </Button>
  )
}

export default HandPiece
