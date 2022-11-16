import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";
import rootReducer from "./reducers";
import './index.css';
import reportWebVitals from './reportWebVitals';

let initialState = {
  table: [
    {value: 0, color: false},
    {value: 0, color: false},
    {value: 0, color: false},
    {value: 0, color: false},
    {value: 0, color: false},
    {value: 0, color: false},
    {value: 0, color: false},
    {value: 0, color: false},
    {value: 0, color: false}
  ],
  playerOne: {
    username: 'Player One',
    pieces: [1, 1, 2, 2, 3, 3],
  },
  playerTwo: {
    username: 'Player Two',
    pieces: [1, 1, 2, 2, 3, 3]
  },
  game: {
    round: 1,
    currentPlayer: true,
    selectedPieceIndex: -1,
    selectedPieceValue: -1,
    gameOn: true
  }
};

const store = createStore(
  rootReducer,
  initialState,
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
