// First Approach
let Person = function () { };

Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}

let Teacher = function () { };
Object.setPrototypeOf(Teacher.prototype, Person.prototype);


Teacher.prototype.teach = function (subject) {
    return `${this.name} is now teaching ${subject}`;
}

let teacher1 = new Teacher();
teacher1.initialize("Adam", 30);
console.log(teacher1.teach("Maths")); //Adam is now teaching Maths

// Second Approach
const person = {
    name: "",
    age: "",
    initialize: function (name, age) {
        this.name = name;
        this.age = age;
    }
}

const teacher2 = Object.create(person)
teacher2.teach = function (subject) {
    return `${this.name} is now teaching ${subject}`;
}

teacher2.initialize("Adam", 30);
console.log(teacher2.teach("Maths")); //Adam is now teaching Maths