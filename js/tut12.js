console.log('DOM in javascript');

let a = document.all;
//a = document.body;
//a = document.forms;


// Array.from(a).forEach(function(element) {
//     console.log(element);
// })
a = document.images;
Array.from(a).forEach(function (img) {
    console.log(img);
})
console.log(a);