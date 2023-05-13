"use strict";
function add(num1, num2) {
    return num1 + num2;
}
const addArrow = (num1, num2) => {
    return num1 + num2;
};
const arr = [2, 4, 6, 8];
const newArr = arr.map((element) => element * element);
const person = {
    name: "Sif",
    balance: 5,
    getBalance(money) {
        console.log(`New balance is ${this.balance + money}`);
    }
};
person.getBalance(5);
