import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TableRow = ({ board }) => {
  return (
    <tr>
      <td>{board.num}</td>
      <td>
        {board.re_level > 0 && (
          <>
            <img
              alt="level"
              src="/images/level.gif"
              width={board.re_level * 20}
              height="15"
            />
            <img alt="re" src="/images/re.gif" />
          </>
        )}
        {/* 클릭하면 상세페이지 하도록 */}
        {/* 현재num 현재page값 가지고 가야함 store에 있는거*/}
        <Link to={`/board/view/${board.num}`}>{board.subject}</Link>
      </td>
      <td>null</td>
      <td>{board.readcount}</td>
    </tr>
  );
};

export default TableRow;
