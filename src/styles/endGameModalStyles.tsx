import { EndGameModalStylesInterface } from "../interfaces/StylesInterfaces";

const EndGameModalStyles: EndGameModalStylesInterface = {
  content: {
    width: "50%",
    height: "50%",
    top: "25%",
    left: "25%",
    border: "solid",
    borderColor: "black",
    overflow: 'hidden'
  },
  title: {
    textAlign: 'center',
    color: 'mediumseagreen',
    fontSize: '45px'
  },
  scoreboard: {
    display: 'flex',
    width: '50%',
    height: '50%',
    border: '2px solid mediumseagreen',
    margin: 'auto'
  },
  playerOneScoreContainer: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: '3px solid orange'
  },
  playerTwoScoreContainer: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeft: '3px solid orange'
  },
  playerOneScore: {
    margin: 0,
    height: '80%',
    fontSize: '140px',
    color: 'blue',
    fontFamily: 'inherit'
  },
  playerTwoScore: {
    margin: 0,
    height: '80%',
    fontSize: '140px',
    color: 'red',
    fontFamily: 'inherit'
  },
  playerOneName: {
    display: 'flex',
    height: '20%',
    alignItems: 'center',
    backgroundColor: 'blue',
    width: '100%',
    color: 'white',
    fontFamily: 'inherit',
    fontSize: '35px',
    justifyContent: 'center'
  },
  playerTwoName: {
    display: 'flex',
    height: '20%',
    alignItems: 'center',
    backgroundColor: 'red',
    width: '100%',
    color: 'white',
    fontFamily: 'inherit',
    fontSize: '35px',
    justifyContent: 'center'
  },
  buttonsContainer: {
    display: 'flex',
    margin: '35px auto',
    width: '50%'
  },
  button: {
    width: '200px',
    height: '50px',
    margin: 'auto',
    backgroundColor: '#81dadd',
    borderRadius: '8px'
  }
}

export default EndGameModalStyles;
