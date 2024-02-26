let myNode = document.querySelector('#p2');

// parentNode 부모
let ptNode = myNode.parentNode;
console.log(ptNode);

console.log(`${ptNode}`);
/////////////////////////////////
// previousSibling
let prevNode = myNode.previousSibling;
console.log(prevNode);

prevNode = prevNode.previousSibling;
console.log(prevNode, prevNode.innerText);

//nextSibling
let nextNode = myNode.nextSibling;
console.log(`nextNode:${nextNode}`);

nextNode = nextNode.nextSibling;
//nextNode:[object HTMLParagraphElement], content3
console.log(`nextNode:${nextNode}, ${nextNode.innerText}`);

//preEleNdoe
let preEleNode = myNode.previousElementSibling;
console.log(`preEleNode:${preEleNode},${preEleNode.innerText}`);

//nextEleNode
let nextEleNode = myNode.nextElementSibling;
console.log(`nextEleNod:${nextEleNode},${nextEleNode.innerText}`);

/////////////////////////////////////////////////////
//childNodes
let divNode = document.getElementById('wrap');
console.log(`divNode:${divNode}`);
//divNode:[object HTMLDivElement]
let divchildNodes = divNode.childNodes;
//[text, p#p1, text, p#p2, text, p#p3, text, p#p4, text]
console.log(divchildNodes);

/////////////////////////////////////
//Children
let divChildren = divNode.children;
//divChildren:[object HTMLCollection]
console.log(`divChildren:${divChildren}`);
//[p#p1, p#p2, p#p3, p#p4, p1: p#p1, p2: p#p2, p3: p#p3, p4: p#p4]

console.log(divChildren);
console.log(divChildren[0]);
console.log(divChildren.item(0));
console.log(divChildren.namedItem('p1'));

///////////////////////////////
//firstChild,  firstElementChild
let pNode = document.getElementById('p4');
let aNode = pNode.firstChild;
//#text
console.log(aNode);

aNode = pNode.firstElementChild;
//<img src="images/gosu.jpg" alt="영화배우 고수" />
console.log(aNode);


///////////////////////////////
//객체.getAttibute("속성명"),  객체.setAttribute("속성명","값")
//객체.속성명 , 객체.속성명="값"
let aAttrNode = aNode.getAttribute('src');
//images/gosu.jpg
console.log(aAttrNode);

aAttrNode = aNode.src;
//http://127.0.0.1:5500/images/gosu.jpg
console.log(aAttrNode);

aNode.setAttribute('title', '스타배우');
console.log(aNode.getAttribute('title'));

aNode.id = 'imgGosu';
console.log(aNode.id);