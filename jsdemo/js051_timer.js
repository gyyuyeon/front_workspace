function display() {
  for (let i = 0; i <= 5; i++) {
    console.log(`i=${i}`);
  }
}

console.log('start========================');

// 1000이  1초
//setTimeout(실행함수, 시간)
setTimeout(display, 5000);
console.log('end ======================');

// 함수를 반복 5초마다
//setInterval(display, 5000);
