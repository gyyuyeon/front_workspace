import React, { useEffect, useState } from "react";
/*
   useEffect : 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정한다.
      특정작업(side effect) : Time(setTimeout), Ajax
      useEffect : useEffect는 side effect라는 뜻이다.

      useEffect 4가지 종류:
      1. useEffect(callback) : 마운트 후, 리렌더링 될때마다
      2. useEffect(callback, []) : 마운트 후
      3. useEffect(callback, [state]) : 마운트 후, state
      4. useEffect(callback, {return ();}, []) : 마운트 후, 언마운트 전
*/
const MyUseEffect001 = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  // useEffect(() => {
  //   console.log("렌더링이 되었습니다");
  // });

  // useEffect(() => {
  //   console.log("렌더링이 되었습니다");
  // }, []);

  // useEffect(() => {
  //   console.log("렌더링이 되었습니다");
  // }, [name]); // name값이 랜더링이될때 useEffect 실행

  // useEffect(() => {
  //   console.log("렌더링이 되었습니다");
  // }, [nickName]); // nickName값이 랜더링이될때 useEffect 실행

  // useEffect(() => {
  //   console.log("렌더링이 되었습니다");
  // }, [name, nickName]); // name,nickName값이 랜더링이될때 useEffect 실행

  // const handleCleanup = () => {
  //   console.log("렌더링이 되었습니다");
  // };
  // useEffect(() => {

  //   return handleCleanup();
  // }, [name]);

  // 위에껄 붙여둔거
  useEffect(() => {
    const handleCleanup = () => {
      console.log("렌더링이 되었습니다");
    };
    return handleCleanup();
  }, [name]);

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={onChangeName}
      />
      <input
        type="text"
        placeholder="nickName"
        value={nickName}
        onChange={onChangeNickName}
      />
    </div>
  );
};

export default MyUseEffect001;
