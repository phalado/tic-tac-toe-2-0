import React from "react";

import styles from "../styles/lineStyles";

const Line = ({ direction, face }: { direction: string, face: string }) => {

  const style = { ...styles.line, ...(styles as any)[direction], ...((styles as any))[face] }

  return <div style={style} />
}

export default Line
