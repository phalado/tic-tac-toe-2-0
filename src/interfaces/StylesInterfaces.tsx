export interface SoloContainerInterface {
  container: React.CSSProperties
}

export interface AppStyleInterface {
  container: React.CSSProperties,
  header: React.CSSProperties,
  title: React.CSSProperties,
  main: React.CSSProperties
}

export interface LineStyleInterface {
  line: React.CSSProperties,
  horizontal: React.CSSProperties,
  vertical: React.CSSProperties,
  right: React.CSSProperties,
  left: React.CSSProperties,
  top: React.CSSProperties,
  bottom: React.CSSProperties
}

export interface CellStyleInterface {
  container: React.CSSProperties,
  clickable: React.CSSProperties,
  blue: React.CSSProperties,
  red: React.CSSProperties
}

export interface PlayerStyleInterface {
  container: React.CSSProperties,
  title: React.CSSProperties,
  playerOne: React.CSSProperties,
  playerTwo: React.CSSProperties,
  piecesContainer: React.CSSProperties
}

export interface HandPieceStyleInterface {
  piece: React.CSSProperties,
  title: React.CSSProperties,
  playerOne: React.CSSProperties,
  playerTwo: React.CSSProperties
}
