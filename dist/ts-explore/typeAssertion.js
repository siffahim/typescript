"use strict";
let touch;
touch = "Don't touch me!!!";
touch.length;
touch.length; //different way of assertion type signature
const kgToGram = (param) => {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The converted result is : ${value} gram`;
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return value;
    }
};
const resultToBeNumber = kgToGram(1000);
const resultToBeString = kgToGram("1000");
console.log(resultToBeString);
try {
}
catch (err) {
    console.log(err.message);
}
