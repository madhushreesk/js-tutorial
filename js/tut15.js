console.log('welcome to 15th tutorial of js');

let cont = document.querySelector(".no");
//cont = document.querySelector(".container");
let nodeName = cont.childNodes[0].nodeName;
//console.log(nodeName);
//let nodeType = cont.childNodes[1].nodeType;
//console.log(nodeType);

// node types
// 1. elements
// 2. attribute
// 3. text node
// 8. comment
// 9. document
// 10. doctype
//console.log(cont.childNodes);
//console.log(cont.children);

let container = document.querySelector("div.container");

//console.log(container.children[1].childNodes);
// console.log(container.children[0].children);
//console.log(container.firstChild);
// console.log(container.firstElementChild);
// console.log(container.lastChild);
// console.log(container.lastElementChild);
//console.log(container.childElementCount);
console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);