import React, { useContext } from "react";
import Modal from "react-modal";
import { GameContext } from "./GameContext";

import styles from "../styles/endGameModalStyles"

const EndGameModal = () => {
  const {
    endGameModalOpen = false,
    victor = '',
    score = []
  } = useContext(GameContext)
  Modal.setAppElement("#root");

  return (
    <div>
      <Modal
        isOpen={endGameModalOpen}
        style={styles}
        contentLabel="Character Modal"
      >
        <h1>{victor}</h1>
        <h4>{score[0]}</h4>
        <h4>{score[1]}</h4>
      </Modal>
    </div>
  )
}

export default EndGameModal
