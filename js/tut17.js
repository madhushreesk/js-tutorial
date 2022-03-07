console.log('Event and event objects in js');

document.getElementById('heading').addEventListener('click', function(e) {
    let vari;
    console.log('you have clicked heading');
    console.log(e);
    //vari = e.target;
    vari = e.target.className;
    vari = e.target.classList;
    vari = e.target.id;
    vari = Array.from(e.target.classList);
    vari = e.offsetX;
    vari = e.offsetY;
    vari = e.clientX;
    vari = e.clientY;
    //location.href = 'https://www.geeksforgeeks.org/';
    console.log(vari);
    
});