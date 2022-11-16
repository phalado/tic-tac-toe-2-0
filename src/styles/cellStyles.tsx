import { CellStyleInterface } from "../interfaces/StylesInterfaces";

const CellStyles: CellStyleInterface = {
  container: {
    width: '33%',
    height: '33%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  clickable: {
    cursor: 'pointer'
  },
  blue: {
    color: 'blue'
  },
  red: {
    color: 'red'
  }
};

export default CellStyles;
