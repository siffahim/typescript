"use strict";
const square = (n) => {
    return n;
};
function squareNormal(n) {
    return n;
}
const squareOne = square("One");
const squareTwo = square(5);
//tuples in generic function
const createArr = (paramOne, paramTwo) => {
    return [paramOne, paramTwo];
};
const resultOne = createArr("Bangladesh", true);
const resultTwo = createArr(false, ["USA"]);
const resultThree = createArr("Miami", { name: "Bangladesh" });
//spread operator:
const flowerDetails = {
    color: "Red",
    cultivation: "Canada"
};
const flowerTest = (flowerDetails) => {
    const flower = "China Rose";
    const newFlowerInfo = Object.assign({ flower }, flowerDetails);
    return newFlowerInfo;
};
const flowerCustomer = flowerTest(flowerDetails);
flowerCustomer;
