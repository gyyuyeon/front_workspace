// 호출한 객체가 없으경우에는 기본적으로 window 객체이다
console.log(this);

let member = {
  name: '홍길동',
  show: function () {
    console.log(this);
  },
};

// {name: '홍길동', show: ƒ}
member.show();
//////////////////////////

let member2 = {
  name: '홍길동',
  show: () => {
    console.log(this);
  },
};
// window
member2.show();
/////////////////////////////////////
let member3 = {
  name: '홍길동',
  show() {
    console.log(this);
  },
};
// {name: '홍길동', show: ƒ}
member3.show();
/////////////////////////////////////////////

function showThisName() {
  console.log(this);
}
// window
showThisName();
/////////////////////////////////////////////

let showThisName2 = () => {
  console.log(this);
};
// window
showThisName2();
////////////////////////////////////////////
// 이벤트에서 this

let btn = document.querySelector('#btn');
btn.addEventListener(
  'click',
  function () {
    //true 버튼 클릭했을때
    console.log(this, this == btn);
  },
  false
);

let btn2 = document.querySelector('#btn');
btn2.addEventListener(
  'click',
  () => {
    //true 버튼 클릭했을때
    console.log(this, this == btn);
  },
  false
);
/////////////////////////////////////////
const hong = { name: '홍길동' };
const jung = { name: '정해인' };

/////////////////////////////////////////
//call() : call() 메서드는 모든 함수에서 사용할수 있으며
//this값을 특정값으로 지정할수 있따
console.log('call()===============================');
// 익명함수일때
// name 홍길동
showThisName.call(hong);
// name 정해인
showThisName.call(jung);

//arrow 함수 일때
// window
showThisName2.call(hong);
// window
showThisName2.call(jung);

//함수에서 this를 쓸꺼면 익명함수를 써야한다 arrow는 window
function update(birthYear, job) {
  this.birthYear = birthYear;
  this.job = job;
  console.log(this);
}
//전역함수로 정의가 되었을때 this는 window 로 정의가 된다
//window
update(2019, 'IT');

//고정된 객체에 값 추가
// 원래는 윈도우를 가리키는데 아래처럼 쓰면 객체를 가리킬수 있따
//{name: '홍길동', birthYear: 200, job: '프로그래머'}
update.call(hong, 200, '프로그래머');
//{name: '정해인', birthYear: 2016, job: '디자이너'}
update.call(jung, 2016, '디자이너');

/////////////////////////////////////////////////
//apply
//1. apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 같다.
//2. call은 일반적임 함수와 마찬가지로 매개변수로 직접 받지만
//   apply은 매개변수를 배열로 받는다.

console.log('apply()===========================');
//{name: '홍길동', birthYear: 2000, job: '프로그래머'}
update.apply(hong, [2000, '프로그래머']);
// {name: '정해인', birthYear: 2016, job: '프로그래머'}
update.apply(jung, [2016, '프로그래머']);

/////////////////////////////////////////////////////
//bind
// 1. call과 사용방법은 같으나 실행을 해야한다.
console.log('bind()===========================');
let hongUpdate = update.bind(hong, 200, '프로그래머');
update.bind(hong, 200, '프로그래머')();
let jungUpdate = update.bind(jung, 2016, '디자이너');
update.bind(jung, 2016, '디자이너')();
//{name: '홍길동', birthYear: 200, job: '프로그래머'}
//hongUpdate();
//{name: '정해인', birthYear: 2016, job: '디자이너'}
//jungUpdate();
