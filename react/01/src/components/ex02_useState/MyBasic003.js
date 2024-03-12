import React, { useState } from "react";

const MyBasic003 = () => {
  const [names, setNames] = useState(["고수", "여진구", "송중기"]);
  const [input, setInput] = useState("");

  const handleChangeNames = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = () => {
    setNames([input, ...names]); // 기존에 있는거에 추가해야 오류가 안남
    setInput(""); // 버튼클릭했을때 입력창 초기화
  };
  return (
    <div>
      <input
        type="text"
        id="fname"
        onChange={handleChangeNames}
        value={input}
      />
      <button onClick={handleClick}>ADD</button>
      {names.map((value, index) => {
        return <p key={index}>{value}</p>;
      })}
    </div>
  );
};

export default MyBasic003;
