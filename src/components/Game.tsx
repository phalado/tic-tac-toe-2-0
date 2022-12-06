import React from 'react';
import Player from '../components/Player';
import Table from '../components/Table';
import HeaderInterface from '../interfaces/HeaderInterface';

import styles from "../styles/gameStyles";
import Header from './Header';
import EndGameModal from './Modals/EndGameModal';

const Game = ({ howToPlayModal, setHowToPlayModal }: HeaderInterface) => (
  <div style={styles.container}>
    <Header howToPlayModal={howToPlayModal} setHowToPlayModal={setHowToPlayModal} />
    <main style={styles.main}>
      <Player playerNumber={true} />
      <Table />
      <Player playerNumber={false} />
      <EndGameModal />
    </main>
  </div>
)

export default Game;
