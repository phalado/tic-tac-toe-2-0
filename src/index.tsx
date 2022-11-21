import React from "react";
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";

import App from "./containers/App";
import gameReducer from './slicers/gameSlicer'
import tableReducer from './slicers/tableSlicer'
import playerOneReducer from './slicers/playerOneSlicer'
import playerTwoReducer from './slicers/playerTwoSlicer'
import reportWebVitals from './reportWebVitals';

const store = configureStore({
  reducer: {
    game: gameReducer.reducer,
    table: tableReducer.reducer,
    playerOne: playerOneReducer.reducer,
    playerTwo: playerTwoReducer.reducer,
  }
})

const container = document.getElementById("root")
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
