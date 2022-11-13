function addNums (num1, num2) {
    //console.log(num1 + num2);
}

addNums(9,9);

addNums();//fail

function addNums2 (num1 = 9, num2 = 39) {
    //console.log(num1 + num2);
}

addNums2();

function addNums (num1, num2) {
    return num1 + num2;
}

//console.log(addNums(9,99));

const addNums3 = (num1, num2) => {
    return num1 * num2;
}

//console.log(addNums3(9,9));

const subNums = (num1, num2) => num1 - num2;

console.log(subNums(99,3));