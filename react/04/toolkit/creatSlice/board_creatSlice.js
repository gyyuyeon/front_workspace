import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  boardList: [],
  pv: { currentPage: 1 },
  boardDetail: {},
  boardFile: null,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    getBoardList(state, action) {
      state.boardList = action.payload.data.boardList; //이거는 스프링에서 보내주는 데이터가 boardList와pv 2개로 들어와서 그럼
      state.pv = action.payload.data.pv;
    },

    getBoardDetail(state, action) {
      state.boardDetail = action.payload.data;
    },
  },
});
// board_action에서 사용
// 한개씩이아니라 boardReducers.getBoardList 로 호출가능
export const boardReducers = boardSlice.actions;
//store에서 사용
export default boardSlice;
