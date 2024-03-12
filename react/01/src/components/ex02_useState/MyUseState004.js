import React, { useState } from "react";

const MyUseState004 = () => {
  const [customer, setCustomer] = useState({
    name: "고수",
    address: "서울시 강남구",
    phone: "010-0000-0000",
  });

  //customer[loc] = "지산"; 객체에 속성명과 내용을 추가할때

  const handleChangeName = (e) => {
    //setCustomer(e.target.value); // 이러면 객체였는데 고정으로변해서 이렇게 x
    //setCustomer({ ...customer, name: e.target.value }); // 기존의 있던 값 복사
    setCustomer((prevState) => {
      return { ...prevState, name: e.target.name };
    });
  };

  const handleChangeAddress = (e) => {
    setCustomer((prevState) => {
      return { ...prevState, address: e.target.address };
    });
  };

  const handleChangePhone = (e) => {
    setCustomer((prevState) => {
      return { ...prevState, phone: e.target.phone };
    });
  };

  return (
    <div>
      <p>
        <span>이름</span>
        <input type="text" onChange={handleChangeName} value={customer.name} />
      </p>

      <p>
        <span>주소</span>
        <input
          type="text"
          onChange={handleChangeAddress}
          value={customer.address}
        />
      </p>

      <p>
        <span>전화번호</span>
        <input
          type="text"
          onChange={handleChangePhone}
          value={customer.phone}
        />
      </p>

      <button>확인</button>
    </div>
  );
};

export default MyUseState004;
