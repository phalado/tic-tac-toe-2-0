import React from 'react';
import Player from '../components/Player';
import Table from '../containers/Table';

import styles from "../styles/gameStyles";

const Game = () =>  (
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

export default Game;
