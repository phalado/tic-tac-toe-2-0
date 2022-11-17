import { HandPieceStyleInterface } from "../interfaces/StylesInterfaces";

const HandPieceStyles: HandPieceStyleInterface = {
  piece: {
    backgroundColor: 'white',
    border: 'solid',
    width: '60px',
    borderRadius: '10px',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px'
  },
  title: {
    textAlign: 'center',
    margin: "3 0px 0"
  },
  playerOne: {
    color: 'blue'
  },
  playerTwo: {
    color: 'red'
  },
};

export default HandPieceStyles;
