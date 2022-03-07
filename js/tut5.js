// type conversion and type coercion

let myVar = String(20);
console.log(myVar, typeof(myVar));

let boolVar = String(true);
// console.log(boolVar, typeof(boolVar));

let date = String(new Date());
// console.log(date, typeof(date));

let arr = [1,2,3,4,5]
// console.log(arr, typeof(arr));

let i = 8;
// console.log(i, typeof(i));

let q = Number("621s8");
q = [1,2,3,4,5,6,"hi", true];
// console.log(q, typeof(q));

let x = parseFloat('34.716');
console.log(x.toFixed(5), typeof(x));

let a = '267';
let b = 56;
console.log(a+b);