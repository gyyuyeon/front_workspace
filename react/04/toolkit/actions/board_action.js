import axios from "axios";
import { boardReducers } from "../creatSlice/board_creatSlice";

function getBoardList(currentPage) {
  return async (dispatch) => {
    const data = await axios
      .get(`/board/list/${currentPage}`)
      .then((Response) => Response.data);
    dispatch(boardReducers.getBoardList({ data }));
    //{data:data} 해야하는데 컬럼명이랑 같아서 이렇게 해도 ㄱㅊ
  };
}

//게시판 글쓰기
function getBoardWrite(formData, config) {
  return async () => {
    await axios
      .post(`/board/write`, formData, config)
      .then((response) => response.data);
  };
}

//상세페이지
function getBoardDetail(num) {
  return async (dispatch) => {
    const data = await axios
      .get(`/board/view/${num}`)
      .then((response) => response.data);

    dispatch(boardReducers.getBoardDetail({ data }));
  };
}

//첨부파일 다운로드
function getBoardDownload(upload) {
  return async (dispatch) => {
    const data = await axios
      .get(`/board/contentdownload/${upload}`)
      .then((response) => response.data);
    // 지금은 없지만 만약 첨부파일을 업로드 한다고 가정하면
    // dispatch(boardActions.getBoardDownload(data))

    return data;
  };
}

//수정하기
function getBoardUpdate(formData, config) {
  return async () => {
    await axios
      .put(`/board/update`, formData, config)
      .then((response) => response.data);
  };
}

//삭제하기
function getBoardDelete(num) {
  return async () => {
    await axios
      .delete(`/board/delete/${num}`)
      .then((response) => response.data);
  };
}

export const boardActions = {
  getBoardList,
  getBoardWrite,
  getBoardDetail,
  getBoardDownload,
  getBoardUpdate,
  getBoardDelete,
};
