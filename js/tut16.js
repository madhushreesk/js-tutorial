console.log("Welcome to 16th tutorial of js");

let element = document.createElement('li');
let text = document.createTextNode('I am a text node');
element.appendChild(text);

element.className = 'child';
element.id = 'createdLi';
element.setAttribute('title', 'myTitle');

let ul = document.querySelector('ul.this');
ul.appendChild(element);
//element.innerHTML = '<b>Hello created id</b>';
element.innerText = 'Hello created id';
//console.log(ul);
//console.log(element);

// replacing an element
let elem2 = document.createElement('h3');
elem2.id = "elem2";
elem2.className = "elem2";
let tnode = document.createTextNode('This is a created node');
elem2.appendChild(tnode);

element.replaceWith(elem2);

let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('def'));

myul.removeChild(document.getElementById('bcd'));

let pr = elem2.getAttribute('id');
//elem2.hasAttribute('id');

elem2.removeAttribute('class');
// console.log(elem2, pr);

