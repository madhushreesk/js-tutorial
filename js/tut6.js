let nam = 'Hi! Madhushri';
let greet = 'Good morning!';
console.log(nam + ' ' + greet);

let html;
html = "<h1> This is me </h1>";


// string and its properties
html = html.concat(' Wrong syntax');
console.log(html);
//console.log(html.length);
//console.log(html.toLowerCase());
//console.log(html.toLocaleUpperCase());
console.log(html);
//console.log(html[7]);

console.log(html.indexOf('<'));
//console.log(html.lastIndexOf('a'));

console.log(html.endsWith('syntax'));

console.log(html.charAt(5));
console.log(html.includes('gaggak'));
console.log(html.substring(5,8));
console.log(html.slice(-6));
//console.log(html.split(' '));
console.log(html.replace('This', 'it'));

let f1 = 'orange\'';
let f2 = 'apple';

let myHtml = `Hello, ${nam} <h1>This is heading </h1>
              <p>you may like ${f2} and ${f1} </p>`;
document.body.innerHTML = myHtml;