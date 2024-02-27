function leftPad(num) {
  if (num < 10) return `0${num}`;
  else return `${num}`;
}

function setText(selector, text) {
  let targetElement = document.querySelector(selector);
  targetElement.innerText = text;
}

let watchTime = () => {
  const present = new Date();
  const dayList = ['일', '월', '화', '수', '목', '금', '토'];

  const hours = leftPad(present.getHours());
  const minute = leftPad(present.getMinutes());
  const seconds = leftPad(present.getSeconds());

  setText('#hours', hours);
  setText('#minute', minute);
  setText('#seconds', seconds);

  const year = present.getFullYear();
  const month = leftPad(present.getMonth() + 1);
  const date = leftPad(present.getDate());
  const day = present.getDay();

  setText('#year', year);
  setText('#month', month);
  setText('#date', date);
  setText('#day', `${dayList[day]}요일`);

  console.log(`${year}-${month}-${date} `);
  console.log(`${hours}-${minute}-${seconds} `);
};

watchTime();
let clockInterval = setInterval(watchTime, 1000);

let btn = document.querySelector('button');
btn.onclick = function () {
  clearInterval(clockInterval);
};

/*
setTimeout(실행함수, 시간) : 일정한 시간이 지난후 한번만 실행함. -한번

setInterval(실행함수, 시간) : 일정 시간 간격을 두고 반복실행함 -반복

clearTimeout, clearInterval: 해제
 */
