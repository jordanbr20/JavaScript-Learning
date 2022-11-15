const number = document.querySelector('.number');
const add = document.querySelector('.add');
const sub = document.querySelector('.sub');

console.log(+number.innerHTML.toString() + 1);

add.addEventListener('click', (e) =>{
    let newnumber = +number.innerHTML.toString() + 1;
    number.innerHTML = newnumber;
    //console.log(number.innerHTML.toString());
})

sub.addEventListener('click', (e) =>{
    let newnumber = +number.innerHTML.toString() - 1;
    number.innerHTML = newnumber;
    //console.log(number.innerHTML.toString());
})