import React from "react";

// const Myprops002 = ({ name, age, loc }) => {
//   return (
//     <div>
//       <p>
//         고객이름: {name} 나이: {age} 지역: {loc}
//       </p>
//     </div>
//   );
// };

// 이건 중괄호 뺴야함
const Myprops002 = (props) => {
  return (
    <div>
      <p>
        고객이름: {props.name} 나이: {props.age} 지역: {props.loc}
      </p>
    </div>
  );
};

export default Myprops002;
