import React, { useContext } from "react";
import Line from "./Line";
import Cell from "../components/Cell";

import { GameContext } from "./GameContext";
import TableInterface from "../interfaces/TableInterface";
import styles from "../styles/tableStyles";

const Table = () => {
  const { table } = useContext(GameContext)

  return (
    <div style={styles.container}>
      <Line direction='horizontal' face='right' />
      <Line direction='horizontal' face='left' />
      <Line direction='vertical' face='top' />
      <Line direction='vertical' face='bottom' />
      {(table as TableInterface[]).map((cell, index) => <Cell value={cell.value} color={cell.color} index={index} key={index} />)}
    </div>
  )
}

export default Table
