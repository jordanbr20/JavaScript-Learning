const number = document.querySelector('.number');
const add = document.querySelector('.add');
const sub = document.querySelector('.sub');
const reset = document.querySelector('.reset');

console.log(+number.innerHTML.toString() + 1);

add.addEventListener('click', (e) =>{
    if(number.innerHTML == 19){
        number.innerHTML = 'Stop waisting time';
        setTimeout(() => number.innerHTML = '0', 3000);
    } else{
    let newnumber = +number.innerHTML.toString() + 1;
    number.innerHTML = newnumber;
    //console.log(number.innerHTML.toString());
    }
})

sub.addEventListener('click', (e) =>{
    if(number.innerHTML == -19){
        number.innerHTML = 'Stop waisting time';
        setTimeout(() => number.innerHTML = '0', 3000);
    } else{
    let newnumber = +number.innerHTML.toString() - 1;
    number.innerHTML = newnumber;
    //console.log(number.innerHTML.toString());
    }
})

reset.addEventListener('click',(e) =>{
    number.innerHTML = '0';
})
