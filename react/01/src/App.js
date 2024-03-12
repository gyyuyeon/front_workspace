import "./App.css";
import MyJsx001 from "./components/ex01_jsx/MyJsx001";
import MyJsx002 from "./components/ex01_jsx/MyJsx002";
import MyJsx003 from "./components/ex01_jsx/MyJsx003";
import MyJsx004 from "./components/ex01_jsx/MyJsx004";
import MyBasic001 from "./components/ex02_useState/MyBasic001";
import MyBasic002 from "./components/ex02_useState/MyBasic002";
import MyBasic003 from "./components/ex02_useState/MyBasic003";
import MyUseState004 from "./components/ex02_useState/MyUseState004";
import MyUseState005 from "./components/ex02_useState/MyUseState005";
import MyUseState006 from "./components/ex02_useState/MyUseState006";
import MyUseRef001 from "./components/ex03_useRef/MyUseRef001";
import MyUseRef002 from "./components/ex03_useRef/MyUseRef002";
import MyUseEffect001 from "./components/ex04_useEffect/MyUseEffect001";
import MyuseStateSync001 from "./components/ex05_async/MyuseStateSync001";
import MyuseStateSync002 from "./components/ex05_async/MyuseStateSync002";
import MyuseStateSync003 from "./components/ex05_async/MyuseStateSync003";
import Myprops001 from "./components/ex06_props/Myprops001";
import Myprops002 from "./components/ex06_props/Myprops002";
import MyuseContext01 from "./components/ex07_context/MyuseContext01";

function App() {
  return (
    <div className="App">
      {/* <Myprops001 name="홍길동" /> */}
      {/* <Myprops002 name="홍길동" age="30" loc="서울" /> */}
      <MyuseContext01 />
    </div>
  );
}

export default App;
