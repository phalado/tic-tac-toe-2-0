import { PlayerStyleInterface } from "../interfaces/StylesInterfaces";

const PlayerStyles: PlayerStyleInterface = {
  container: {
    backgroundColor: 'white',
    border: 'solid',
    width: '15%',
    height: '600px',
    position: 'relative',
    margin: '0 5%',
    borderRadius: '10px'
  },
  title: {
    textAlign: 'center',
    margin: "30px 0"
  },
  playerOne: {
    color: 'blue'
  },
  playerTwo: {
    color: 'red'
  },
  piecesContainer: {
    height: '80%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center'
  }
};

export default PlayerStyles;
