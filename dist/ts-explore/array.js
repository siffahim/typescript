"use strict";
//explicit
const names = ["Fahim", "Karim", "Rahim"];
const rolls = [50, 203, 3];
// rolls[5] = "Hi" not possible to assign string value
rolls[5] = 45;
//implicit
const citizens = ["Shawon", 58, true];
//tuples
const user = ["Alison", 101];
const compareTwoArray = (arrOne, arrTwo) => {
    const newArr = [];
    for (let x of arrOne) {
        for (let i of arrTwo) {
            if (x === i) {
                newArr.push(x);
            }
        }
    }
    return newArr;
};
const arrOne = [1, 2, 3, 4, 5];
const arrTwo = [2, 4, 6, 8];
console.log(compareTwoArray(arrOne, arrTwo));
