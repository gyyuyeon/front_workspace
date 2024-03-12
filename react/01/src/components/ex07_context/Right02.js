import React, { useContext } from "react";
import Right03 from "./Right03";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UseContext";

const Right02 = () => {
  // useContext(Context.Provider종류)
  const { name } = useContext(UserContext);
  const { number } = useContext(ThemeContext);
  return (
    <div>
      <h1>Right02 :</h1>
      <h1>Nubmer : {number} </h1>
      <h1>name : {name} :</h1>
      <Right03 />
    </div>
  );
};
export default Right02;
