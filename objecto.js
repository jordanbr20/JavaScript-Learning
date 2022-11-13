function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}

const Person1 = new Person('Jordan', 'Riley', '1-1-1990');
const Person2 = new Person('John', 'Doe', '1-1-1991');

//console.log(Person1, Person2);
//console.log(`${Person1.firstName} and ${Person2.firstName}`);

/*console.log(
    Person1.firstName,
    Person1.lastName,
    Person1.dob.getFullYear(),
    Person2.firstName,
    Person2.lastName,
    Person2.dob.getFullYear()
);*/

//console.log(Person1.getFullName(), Person1.getBirthYear());

Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

class PersonClass {
    constructor(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const PersonClass1 = new Person('Jordan', 'Riley', '1-1-1990');

//console.log(PersonClass1);