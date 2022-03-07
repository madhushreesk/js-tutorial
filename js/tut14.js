console.log("JS tutorial");


// single element selector
let element = document.getElementById('myfirst');
element = element.className;
// element = element.childNodes;
// element = element.parentNode;
// element.style.color = 'red';
// element.innerText = 'My name is Madhushri';
// element.innerHTML = "<b>Heyyy</b>";
//console.log(element);

 let sel = document.querySelector('#myfirst');
 sel = document.querySelector('div');
// sel.style.color = 'orange';
// console.log(sel);

// multi element selector
let elems = document.getElementsByClassName('child');
//elems = document.getElementsByClassName('container');
//console.log(elems[0].getElementsByClassName('child'));

elems = document.getElementsByTagName('div');
console.log(elems);

Array.from(elems).forEach(element =>{
    console.log(element);
    element.style.color = 'purple';
});
