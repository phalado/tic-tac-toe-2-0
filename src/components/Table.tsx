import React from "react";
import Line from "./Line";
import Cell from "../containers/Cell";

import styles from "../styles/tableStyles";
import TableInterface from "../interfaces/TableInterface";

const Table = ({ table }: { table: TableInterface[] }) => {
  return(
  <div style={styles.container}>
    <Line direction='horizontal' face='right' />
    <Line direction='horizontal' face='left' />
    <Line direction='vertical' face='top' />
    <Line direction='vertical' face='bottom' />
    {table.map((cell, index) => <Cell value={cell.value} color={cell.color} index={index} />)}
  </div>
)}

export default Table
