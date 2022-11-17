import React from "react";
import CellInterface from "../interfaces/CellInterface";

import styles from "../styles/cellStyles";

const Cell = ({
  color,
  value
}: CellInterface) => {
  const colorStyle = color ? styles.blue : styles.red

  const fillingValue = () => value === 0 ? null : <p style={colorStyle}>{value}</p>

  return (
    <div style={{ ...styles.container, ...styles.clickable }}>
      {fillingValue()}
    </div>
  )
}

export default Cell;
