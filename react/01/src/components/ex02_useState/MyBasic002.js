import React, { useState } from 'react';

const MyBasic002 = () => {
  //const [상태, 상태변경 함수] = useState(초기값)
  let [cnt, setCnt] = useState(0);
  const handleClick = () => {
    setCnt(cnt + 1);
    console.log(`cnt:${cnt}`);
  };

  return (
    <div>
      <p>
        <span> {cnt}</span>
        <button onClick={handleClick}>CNT UPDATE</button>
      </p>

        
    </div>

     

  );
};

export default MyBasic002;
