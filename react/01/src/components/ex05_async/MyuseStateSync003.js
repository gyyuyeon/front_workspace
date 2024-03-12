import React, { useState, useEffect } from "react";

// state업데이트는 비동기적으로 처리되기 때문에 연속적으로 state를
// 업데이트하려고 하면 이전 state값에 기반한 명경이 모두 동일한 값에서 발생한다. 이를해결하기 위해서 useEffect와 그 의존성 배열을 이용해서 해결할수 있다
const MyuseStateSync003 = () => {
  const [number, setNumber] = useState(0);
  const [action, setAction] = useState("");

  // 의존성 배열을 통해서 state를 사용해서 랜더링을 발생
  useEffect(() => {
    if (action === "up") {
      setNumber((number) => number + 3);
      console.log(number);

      setNumber((number) => number + 2);
      console.log(number);

      setNumber((number) => number + 1);
      console.log(number);
    } else if (action === "down") {
      setNumber((number) => number - 3);
      console.log(number);

      setNumber((number) => number - 2);
      console.log(number);

      setNumber((number) => number - 1);
      console.log(number);
    }

    setAction(""); //action 초기화
  }, [action]); // [action] 의존성 배열 꼭 필요

  const handleUpNumber = () => {
    setAction("up");
  };

  const handleDownNumber = () => {
    setAction("down");
  };

  return (
    <div>
      <p>{number}</p>
      <button onClick={handleUpNumber}>UP</button>
      <button onClick={handleDownNumber}>Down</button>
    </div>
  );
};

export default MyuseStateSync003;
