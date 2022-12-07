import { AppStyleInterface } from "../interfaces/StylesInterfaces";

const appStyles: AppStyleInterface = {
  container: {
    backgroundColor: '#282c34',
    height: '100%'
  },
  header: {
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    color: 'cornflowerblue',
    margin: '50px'
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '30%',
    margin: 'auto',
    marginTop: '100px',
    alignItems: 'center'
  },
  usernameContainer: {
    display: 'flex',
    height: '30px',
    margin: '20px',
    marginBottom: '50px',
    justifyContent: 'space-around'
  },
  label: {
    color: 'cornflowerblue',
    margin: 0
  },
  button: {
    width: '200px',
    height: '50px',
    margin: 'auto',
    backgroundColor: 'cadetblue',
    borderRadius: '8px'
  },
  input: {
    textAlign: 'center',
    borderRadius: '7px',
    height: '30px'
  },
  joinGameContainer: {
    display: 'flex',
    height: '50px',
    justifyContent: 'space-around',
    marginTop: '50px',
    alignItems: 'center'
  },
  waitingMain: {

  },
  waitingTitle: {
    color: 'cornflowerblue',
  },
  gameId: {
    color: 'yellow'
  },
  menuIcon: {
    width: '5%',
    height: '5%',
    position: 'absolute',
    top: '5%',
    right: '5%'
  },
  menuContainer: {
    height: '20%',
    width: '300px',
    position: 'absolute',
    top: '10%',
    right: '5%',
    zIndex: 1
  }
};

export default appStyles;
