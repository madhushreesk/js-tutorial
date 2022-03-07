console.log('More events in js');
let btn = document.getElementById('btn');
//btn.addEventListener('click',func1);
//btn.addEventListener('dbclick',func2);
//btn.addEventListener('mousedown',func3);

// function func1(e) {
//     console.log("Thanks",e);
//     e.preventDefault();
// }

// function func2(e) {
//     console.log("Its a double click",e);
//     e.preventDefault();
// }

// function func3(e) {
//     console.log("Its a mouse down");
//     e.preventDefault();
// }
// document.querySelector('.no').addEventListener('mouseenter',function() {
//     console.log("you entered no");
// });

// document.querySelector('.no').addEventListener('mouseleave',function() {
//     console.log("you exit");
// });

document.querySelector('.container ').addEventListener('mousemove',function(e) {
    //console.log(e.offsetX);
    //console.log(e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetX + e.offsetY})`;
    console.log("you moved the mouse");
});


