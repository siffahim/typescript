"use strict";
const student0 = {
    name: "Monica",
    age: 22,
    designation: "Programmer",
    address: "Miami"
};
const student2 = {
    name: "Angel",
    designation: "Designer",
    address: "Berlin"
};
const isYoung = false;
let courseName = "Next Level WEB DEV";
// const calculate = (num1: number, num2: number,operation:(x:number,y:number) => number) => {
//     return operation(num1,num2)
// }
const calculate = (num1, num2, operation) => {
    return operation(num1, num2);
};
calculate(10, 20, (x, y) => x + y);
