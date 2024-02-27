let btn = document.querySelector('button');

// btn.onclick = () => {
//   alert('click1');
// };

// btn.onclick = () => {
//   alert('click2');
// };

function click1() {
  alert('click1');
}

function click2() {
  alert('click2');
}

// btn.addEventListener(이벤트 ,함ㅎ수 , 이벤트)
// 하나의 요소에 다른 이벤트를 여러게 설정할수 있다
// 이벤트 전파 => true:capturing false:bublling
btn.addEventListener('click', click1, false); //false 버블링
btn.addEventListener('click', click2, false);
