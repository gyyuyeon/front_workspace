import React, { useContext } from "react";

import { ThemeContext } from "./context/ThemeContext";

const Left03 = () => {
  const { number } = useContext(ThemeContext);
  return (
    <div>
      <h1>Left03</h1>
      <h1>Number:{number}</h1>
    </div>
  );
};

export default Left03;
