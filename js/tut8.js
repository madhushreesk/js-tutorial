// if else statement

let age = 45;
// const vari = 36;
const drive = false;

if (age !== 20) {
    console.log('Age is not 20');
}
if (age >= 30 && age <= 40){
    console.log('Age is b/w 30 and 40');
}

if (typeof vari !== 'undefined'){
    console.log('Vari is defined');
}
else{
    console.log('Vari is not defined');
}

if (drive){
    console.log('Can drive');
}
else{
    console.log('Cannot drive');
}

console.log(age > 25? 'Age is greater than 25' : 'Age is less than 25');


switch (age) {
    case 20:
        console.log('Age is 20');
        break;

    case 30:
        console.log('Age is 30');
        break;

    case 40:
        console.log('Age is 40');
        break;

    case 50:
        console.log('Age is 50');
        break;

    default:
        console.log('Age is out of bound');
        break;
}