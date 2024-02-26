//document.log_f.onsubmit = function () {};

let btn = document.querySelector('#btn');

btn.onclick = () => {
  let idNode = document.querySelector('#my_id');
  let passNode = document.querySelector('#my_pass');

  if (idNode.value == '') {
    alert('아이디를 입력하세요.');
    return false;
  }

  if (passNode.value == '') {
    alert('비밀번호를 입력하세요.');
    return false;
  }
  //강제적으로  submit 이벤트를 발생시킨다
  document.log_f.submit();

  
};
