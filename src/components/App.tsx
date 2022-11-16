import React from 'react';
import Table from '../containers/Table';

import styles from "../styles/appStyles";

const App = () => {
  // const [endGameModal, setEndGameModal] = useState(false)

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Tic-Tac-Toe 2.0</h1>
      </header>
      <main style={styles.main}>
        {/* <Player playerNumber={true} /> */}
        <Table />
        {/* <Player playerNumber={false} /> */}
        {/* <EndGameModal endGameModalOpen={endGameModalOpen} /> */}
      </main>
    </div>
  )
}

export default App;
