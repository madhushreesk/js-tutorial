console.log('Exersice 1');
 
z = document.links;

let a = "Harry";
let b = "javascript";

Array.from(z).forEach(function(element){
    if (String(element).includes(b)){
        console.log(element); // also we can do console.log(element.href)
    };
}); 