//약관동의
document.frm.onsubmit = () => {
  let admin = document.frm.admin;
  if (!admin.checked) {
    alert('약관에 동의해야 합니다.');
    return false;
  }
};

//전체선택
document.frm.allCheck.onclick = function () {
  //console.log(this.checked);
  // document.frm.subject1.checked = this.checked;
  // document.frm.subject2.checked = this.checked;
  // document.frm.subject3.checked = this.checked;

  let checkgroup = document.querySelectorAll('.checkgroup');
  //console.log(checkgroup);

  let myThis = this;
  // checkgroup.forEach((Element) => {
  //   //[input#subject1.checkgroup, input#subject2.checkgroup, input#subject3.checkgroup]
  //   //console.log(this);
  //   Element.checked = myThis.checked;
  //   });

  //checkgroup은 NodeList이므로 map을 사용할 수 없다.
  //Array.form()을 이용해서 NodeList을 Array로 생성한다.
  // let myArray = Array.from(checkgroup);
  // myArray.map((Element) => {
  //   return (Element.checked = myThis.checked);
  // });

  let iArray = [...checkgroup];
  iArray.map((Element) => {
    return (Element.checked = myThis.checked);
  });
};
