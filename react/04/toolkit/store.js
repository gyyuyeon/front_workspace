import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "./creatSlice/board_creatSlice";

const store = configureStore({
  reducer: {
    board: boardSlice.reducer,
  },
});

export default store;
