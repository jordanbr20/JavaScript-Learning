const person = {
    firstName: 'Jordan',
    lastName: 'Riley',
    age: 30,
    hobbies: ['gaming', 'coding', 'VR'],
    address: {
        street: '123 street',
        city: 'Columbus',
        state: 'IN'
    }
}

//console.log(person);

//console.log(person.firstName + ' ' + person.lastName);
//console.log(person.firstName, person.lastName);

//console.log(person.hobbies[1]);
//console.log(person.address.city);

const {firstName, lastName, address: {city}} = person;

//console.log(firstName);
//console.log(city);

person.email = 'myemail@gmail.com';

//console.log(person.email);

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist Appt',
        isCompleted: false
    },
];

//console.log(todos);

//console.log(todos[1].text);

//const todoJSON = JSON.stringify(todos);
//console.log(todoJSON);

for (let i = 0; i < 10; i++){
    //console.log(`Number ${i}`);
}

let i = 0;
while(i<10) {
    //console.log(`Numner ${i}`);
    i++;
}

for(let i=0; i< todos.length; i++){
    //console.log(todos[i].text);
}

for(let todo of todos){
    //console.log(todo.text);
}

todos.forEach(function(todo) {
    //console.log(todo.text)
});

const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});

console.log(todoCompleted);