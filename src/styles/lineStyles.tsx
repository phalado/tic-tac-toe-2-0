import { LineStyleInterface } from "../interfaces/StylesInterfaces";

const lineStyles: LineStyleInterface = {
  line: {
    border: '9px solid grey',
    borderRadius: '9px',
    position: 'absolute',
  },
  horizontal: {
    width: '0px',
    height: '97.5%',
  },
  vertical: {
    width: '97.5%',
    height: '0px',
  },
  right: {
    right: '32%'
  },
  left: {
    left: '32%'
  },
  top: {
    top: '32%'
  },
  bottom: {
    bottom: '32%'
  },
};

export default lineStyles;
