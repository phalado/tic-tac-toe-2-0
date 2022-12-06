import { AboutModalStlesInterface } from "../interfaces/StylesInterfaces";

const AboutModalStyles: AboutModalStlesInterface = {
  content: {
    width: "40%",
    top: "10%",
    left: "30%",
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
  paragraph: {
    fontSize: '20px'
  },
  link: {
    color: 'inherit'
  },
  image: {
    width: '90%',
    marginLeft: "5%"
  },
  xIcon: {
    width: '3%',
    position: 'fixed',
    right: '28%',
    cursor: 'pointer'
  },
  bigIcon: {
    width: '70%',
    margin: '5% 15%'
  },
  iconContainer: {
    display: 'flex',
    height: '70px'
  }
}

export default AboutModalStyles;
