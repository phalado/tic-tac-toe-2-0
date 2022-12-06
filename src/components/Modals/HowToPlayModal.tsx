import React from "react";
import Modal from "react-modal";
import HowToPlayModalInterface from "../../interfaces/HowToPlayModalInterface";

import styles from "../../styles/howToPlayModalStyles"

const HowToPlayModal = ({ howToPlayModal, setHowToPlayModal }: HowToPlayModalInterface) => {
  Modal.setAppElement("#root");

  return (
    <div>
      <Modal
        isOpen={howToPlayModal}
        style={styles}
        contentLabel="Game Over"
      >
        <img
          style={styles.xIcon}
          src={'./assets/images/xIcon.png'}
          alt="Close modal"
          onClick={() => setHowToPlayModal(false)}
        />
        <h1 style={styles.title}>How to play</h1>
        <div>
          <p style={styles.paragraph}>Basically, this game is similar to our good old Tic-Tac-Toe but with 2 important differences:</p>
          <p style={styles.paragraph}>1 - Instead of the X's and O's the we are used to use you have 3 sizes of coins.</p>
          <p style={styles.paragraph}>2 - You can replace a smaller coin for a bigger one, what means you can overlap a size 1 coin for a size 2 or 3 and a size 2 coin for a size 3 one.</p>
        </div>
        <div>
          <h2 style={styles.title2}>Starting the game:</h2>
          <p style={styles.paragraph}>It's important to understand that this is, for now, a pure online multiplayer game.</p>
          <p style={styles.paragraph}>Before playing, you need to create a game, receiving a game ID from the server.</p>
          <p style={styles.paragraph}>After that, share your gameId with your <s>guinea pig</s> friend.</p>
          <p style={styles.paragraph}>You can use the input next t "Change username" t change your username.</p>
          <img style={styles.image} src={'./assets/images/ttt01.gif'} alt="Creating a game" />
        </div>
        <div>
          <h2 style={styles.title2}>Joining the game:</h2>
          <p style={styles.paragraph}>After receiving the gameId, type it in the input next to the "Join Game" button and click on it.</p>
          <p style={styles.paragraph}>The game must start imediatelly.</p>
          <p style={styles.paragraph}>An error will occur if you try to enter an invalid gameId or if you try to join a game with two players.</p>
          <img style={styles.image} src={'./assets/images/ttt02.gif'} alt="Joining a game" />
        </div>
        <div>
          <h2 style={styles.title2}>Playing:</h2>
          <p style={styles.paragraph}>To make a move click on the coin you want to move, than the cell that will be the destiny.</p>
          <img style={styles.image} src={'./assets/images/ttt03.gif'} alt="Making a move" />
          <p style={styles.paragraph}>The process is the same to overlap a coin. Select a coin bigger the one you want to overlap and than click on the desired cell.</p>
          <img style={styles.image} src={'./assets/images/ttt04.gif'} alt="Overlaping" />
          <img style={styles.image} src={'./assets/images/ttt05.gif'} alt="Overlaping again" />
        </div>
        <div>
          <h2 style={styles.title2}>Game over:</h2>
          <p style={styles.paragraph}>Basically, the game over rules are the same as the normal Tic-Tac-Toe.</p>
          <p style={styles.paragraph}>The only difference is that you will have a draw if both players end up without any coins.</p>
          <img style={styles.image} src={'./assets/images/ttt06.gif'} alt="Game Over" />
          <p style={styles.paragraph}>After the game is over, you can try a rematch with your friend clicking in "Play Again".</p>

        </div>
      </Modal>
    </div>
  )

}

export default HowToPlayModal