//console.log(window);

const form = document.getElementById('my-form');

//console.log(form);

//console.log(document.querySelector('.container'));
//console.log(document.querySelector('h1'));

//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByTagName('li'));

//const items = document.querySelectorAll('.item');

//items.forEach((item) => console.log(item));

//const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Hello';
//ul.children[1].innerText = 'World';
//ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

//const btn = document.querySelector('.btn');
//btn.style.background = 'green';

//click
//mouseover
//mouseout

/*
const btn = document.querySelector('.btn');
btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = 'red';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1> Hello </h1>';
});
*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userlist = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userlist.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }
}