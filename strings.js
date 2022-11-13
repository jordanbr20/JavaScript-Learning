const name = 'Jordan';
const age = 25;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name + ' name ' + name);
console.log(typeof age + ' age ' + age);
console.log(typeof rating + ' rating ' + rating);
console.log(typeof isCool + ' isCool ' + isCool);
console.log(typeof x + ' x ' + x);
console.log(typeof y +' y ' +  y);
console.log(typeof z +' z ' +  z);

console.log(`My name is ${name} and I am ${age}.`)

const other = `My name is ${name} and I am ${age}.`

console.log(other);

const s = 'Hello World!';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5));
console.log(s.substring(0,5).toUpperCase());
console.log(s.substring(6,12));
console.log(s.split(''));

const groups = 'gaming, coding, hardware, virtual';

console.log(groups.split(', '));