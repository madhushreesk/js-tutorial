console.log('Arrays and objects');

let marks = [12,45,33,67,84,96];
const fruits = ['Apples', 'oranges', 'Grapes', 'banana'];
const mixed = [25, 'str', [3,5]];

//console.log(mixed);

const arr = new Array('lemon', 'veggies', 'cheese');
console.log(fruits[3]);
console.log(arr.length);
arr[1] = 45;
let marks2 = [23, 56, 82];
console.log(marks);
marks.pop();
marks.unshift(52);
marks.reverse();
marks = marks.concat(marks2);
console.log(marks);

let myobj = {
    name : 'Madhushri',
    age : '20',
    college : 'Git'
}

console.log(myobj);
console.log(myobj.college);

