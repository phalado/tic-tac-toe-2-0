import React from 'react';
import Player from '../components/Player';
import Table from '../components/Table';

import styles from "../styles/gameStyles";
import EndGameModal from './EndGameModal';

const Game = () =>  (
  <div style={styles.container}>
    <header style={styles.header}>
      <h1 style={styles.title}>Tic-Tac-Toe 2.0</h1>
    </header>
    <main style={styles.main}>
      <Player playerNumber={true} />
      <Table />
      <Player playerNumber={false} />
      <EndGameModal />
    </main>
  </div>
)

export default Game;
