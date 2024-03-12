import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const Right03 = () => {
  const { number, onHandleIncrease, onHandleDecrease } =
    useContext(ThemeContext);
  return (
    <div>
      <h1>Right03</h1>
      <h1>Number :{number} </h1>
      <input type="button" value="+" onClick={onHandleIncrease} />
      <input type="button" value="-" onClick={onHandleDecrease} />
    </div>
  );
};

export default Right03;
