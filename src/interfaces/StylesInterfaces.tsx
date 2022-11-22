export interface SoloContainerInterface {
  container: React.CSSProperties
}

export interface AppStyleInterface {
  container: React.CSSProperties
  header: React.CSSProperties
  title: React.CSSProperties
  main: React.CSSProperties
  label: React.CSSProperties
  usernameContainer: React.CSSProperties
  button: React.CSSProperties
  input: React.CSSProperties
  joinGameContainer: React.CSSProperties
  waitingTitle: React.CSSProperties
  waitingMain: React.CSSProperties
  gameId: React.CSSProperties
}

export interface GameStyleInterface {
  container: React.CSSProperties
  header: React.CSSProperties
  title: React.CSSProperties
  main: React.CSSProperties
}

export interface LineStyleInterface {
  line: React.CSSProperties
  horizontal: React.CSSProperties
  vertical: React.CSSProperties
  right: React.CSSProperties
  left: React.CSSProperties
  top: React.CSSProperties
  bottom: React.CSSProperties
}

export interface CellStyleInterface {
  container: React.CSSProperties
  clickable: React.CSSProperties
}

export interface PlayerStyleInterface {
  container: React.CSSProperties
  title: React.CSSProperties
  playerOne: React.CSSProperties
  playerTwo: React.CSSProperties
  piecesContainer: React.CSSProperties
}

export interface HandPieceStyleInterface {
  button: React.CSSProperties
}

export interface PieceStyleInterface {
  common: React.CSSProperties
  bluePiece: React.CSSProperties
  redPiece: React.CSSProperties
  coffeeImage: React.CSSProperties
  disabled: React.CSSProperties
  selected: React.CSSProperties
}
