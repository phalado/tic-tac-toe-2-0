import { HowToPlaModalStylesInterface } from "../interfaces/StylesInterfaces";

const HowToPlayModalStyles: HowToPlaModalStylesInterface = {
  content: {
    width: "80%",
    top: "10%",
    left: "10%",
    border: "solid",
    borderColor: "black",
    backgroundColor: '#595c62',
    color: 'white',
  },
  title: {
    margin: '0',
    marginBottom: '50px',
    textAlign: 'center',
    fontSize: '40px'
  },
  title2: {
    marginTop: '50px',
    fontSize: '30px'
    
  },
  paragraph: {
    fontSize: '20px'
  },
  image: {
    width: '90%',
    marginLeft: "5%"
  },
  xIcon: {
    width: '3%',
    position: 'fixed',
    right: '10%',
    cursor: 'pointer'
  }
}

export default HowToPlayModalStyles;
