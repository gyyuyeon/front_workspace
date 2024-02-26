document.carZone.onsubmit = () => {
  let opt1 = document.carZone.opt1;
  if (!opt1.checked) {
    alert('ok00');
    let input = document.getElementsByTagName('input')[0];
    input.innerText = 25000;
    return false;
  }
};
