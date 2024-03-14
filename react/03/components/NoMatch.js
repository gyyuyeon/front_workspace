import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div>
      <h2>NoMatch</h2>
      {/* react dom에서 제공되눈 요소 */}
      {/* https://reactrouter.com/en/main/start/tutorial */}
      {/* npm install react-router-dom */}
      <Link to="/">go to home</Link>
    </div>
  );
};

export default NoMatch;
