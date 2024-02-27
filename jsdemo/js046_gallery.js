// (1) 작은 이미지를 클릭하면 큰 이미지 보이게

let bigPhoto = document.querySelector('#photo > img');
console.log(bigPhoto);

let list_zone = document.querySelector('#inner_list');
let ul_li = list_zone.children;
console.log(ul_li);

// Array <= HTMLCollection
ul_li = [...ul_li]; // ul_li = Array.from(ul_li);

ul_li.map((liTag, idx) => {
  let aTag = liTag.querySelector('a');
  aTag.onclick = (e) => {
    bigPhoto.src = aTag.href;
    return false; //e.preventDefault // 작은이미지가 바뀌면서 큰이미지는 안되게
  };
  //console.log(liTag, typeof liTag);
});

//2. 다음(>)버튼을 클릭할 때 마다 <li>가 100px씩 좌측으로 이동
let m_num = 0;
let b_btn = document.querySelector('#next_btn');
b_btn.onclick = (e) => {
  if (m_num >= ul_li.length - 3) return false;
  m_num++;
  list_zone.style.marginLeft = -100 * m_num + 'px';

  return false;
};

// (3) 다음(<) 버튼을 클릭할때마다 <li>가 100px씩 우측으로 이동
let before_btn = document.querySelector('#before_btn');
before_btn.onclick = (e) => {
  if (m_num <= 0) return false;
  m_num--;
  list_zone.style.marginLeft = -100 * m_num + 'px';

  return false;
};
