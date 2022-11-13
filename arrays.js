const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];

fruits[3] = 'grapes';

console.log(fruits);

console.log(fruits[1]);

fruits.push('mangos');

fruits.unshift('strawberries');

console.log(fruits);

console.log('fruits.pop');
fruits.pop();

console.log(fruits);

console.log(Array.isArray(fruits));
console.log(Array.isArray('notanarray'));

console.log(fruits.indexOf('pears'));

