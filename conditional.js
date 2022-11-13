const x = 14;
const y = 101;

if(x === 10){
    //console.log('x is 10');
}else if(x > 10){
    //console.log('x is greater than 10')
} else {
    //console.log('x is less than 10');
}

if(x < 5 && y > 10){
    //console.log('x is less than 5 and y is greater than 10.');
} else {
    //console.log('f');
}

const color = x > 10 ? 'red' : 'blue';

//console.log(color);

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}