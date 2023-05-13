"use strict";
//explicit
let course = 'Bangladesh';
course = "German";
const age = 20;
const isFood = false;
//string
//number
//boolean
//null
//undefined
//problem One
const logStringProblem = (strValue, numValue = 3) => {
    for (let i = 0; i < numValue; i++) {
        console.log(strValue);
    }
};
const checkAdultPerson = (peoples) => {
    const result = peoples.filter(people => people.age >= 18);
    return result;
};
const peoplesList = [
    {
        name: "Alison",
        age: 25
    },
    {
        name: "Berlin",
        age: 15
    },
    {
        name: "Rachel",
        age: 26
    }
];
//console.log(checkAdultPerson(peoplesList))
//problem three
const reversArray = (...arr) => {
    const reverseElement = arr.reverse();
    return reverseElement;
};
const fruits = ["Avocado", "Banana", "Jackfruit", "Orange"];
//console.log(reversArray<string>(...fruits))
//problem four
class Person {
    //using parameter properties:
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `The name of person is ${this.name} and his/her age is ${this.age}`;
    }
}
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getGrade() {
        return `The student got GPA ${this.grade}`;
    }
}
const personOne = new Person("Harry", 20);
const studentOne = new Student("Alison", 30, "A+");
// console.log(personOne.getDetails())
// console.log(studentOne.getGrade())
//problem five
const stringChecker = (message) => {
    if (typeof message === 'string') {
        console.log(message);
    }
    else {
        throw new Error("There is wrong type");
    }
};
stringChecker("Welcome Alison");
