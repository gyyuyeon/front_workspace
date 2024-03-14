import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? "green" : "",
    fontSize: isActive ? "2rem" : "",
  };
};
const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {/* <a>요소는 전체를 렌더링 하므로 <Link>또는<NavLink>을 사용한다 */}
            {/* <a href="/">HOME</a> */}

            {/* <Link to="/" style={activeStyle}>
              Home
            </Link> */}
            {/* Link에서는 스타일 속성을 사용할수 없다 */}
            {/* NavLink는 스타일 속성 사용가능 */}
            <NavLink to="/" style={activeStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={activeStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="dashboard" style={activeStyle}>
              DashBoard
            </NavLink>
          </li>

          <li>
            <NavLink to="nothing-here" style={activeStyle}>
              Nothing
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
