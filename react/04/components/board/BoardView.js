import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { boardActions } from "../../toolkit/actions/board_action";
import { current } from "@reduxjs/toolkit";

const BoardView = () => {
  const { num } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const boardDetail = useSelector((state) => state.board.boardDetail);
  const pv = useSelector((state) => state.board.pv);

  useEffect(() => {
    dispatch(boardActions.getBoardDetail(num));
  }, []);

  //다운로드
  const handleDownload = async () => {
    const boardFile = await dispatch(
      boardActions.getBoardDownload(boardDetail.upload)
    );

    // 여기서 부터 붙여넣기한 부분
    const fileName = boardDetail.upload.substring(
      boardDetail.upload.indexOf("_") + 1
    );
    console.log(fileName);

    const url = window.URL.createObjectURL(new Blob([boardFile]), {
      type: "application/octet-stream",
    });

    console.log("url:", url);
    const link = document.createElement("a"); //<a></a>
    link.href = url;
    link.setAttribute("download", fileName);
    link.style.cssText = "display:none";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  //삭제버튼
  const handleDelete = async (e) => {
    e.preventDefault();
    dispatch(boardActions.getBoardDelete(num));
    navigate(`/board/list/${pv.currentPage}`);
  };

  return (
    <>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <tbody>
          <tr>
            <th width="20%">글쓴이</th>
            <td>null</td>
          </tr>
          <tr>
            <th width="20%">조회수</th>
            <td>{boardDetail.readcount}</td>
          </tr>
          <tr>
            <th>제목</th>
            <td colSpan="3">{boardDetail.subject}</td>
          </tr>
          <tr>
            <th>메일</th>
            <td colSpan="3">{boardDetail.memberEmail}</td>
          </tr>
          <tr>
            <th>내용</th>
            <td colSpan="3" style={{ whiteSpace: "pre-line" }}>
              {boardDetail.content}
            </td>
          </tr>
          <tr>
            <th>첨부파일</th>
            <td colSpan="3">
              <button onClick={handleDownload}>
                {boardDetail.upload &&
                  boardDetail.upload.substring(
                    boardDetail.upload.indexOf("_") + 1
                  )}
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <Link className="btn btn-primary" to={`/board/list/${pv.currentPage}`}>
        리스트
      </Link>
      <Link className="btn btn-primary" to={`/board/write/${num}`}>
        답변
      </Link>
      <Link className="btn btn-primary" to={`/board/update/${num}`}>
        수정
      </Link>
      {/* 페이지를 띄우느거 필요없으면 그냥 버튼처리 */}
      {/* <Link className="btn btn-primary" to={`/board/delete/${num}`}>
        삭제
      </Link> */}
      <button className="btn btn-primary" onClick={handleDelete}>
        삭제
      </button>
    </>
  );
};

export default BoardView;
