"use strict";
//change number to string value with the help of normal system of js
const arrays = [1, 2, 3, 4];
arrays.map(number => console.log(number.toString));
const rectangularArea = {
    height: 10,
    width: 12
};
const areaOne = { name: "Alison", age: 25 };
const areaReadonly = { name: "Alison", age: 25 };
//areaReadonly.age = 20;
//quiz
function getArrayItem(arr, index, key) {
    const item = arr[index];
    return item[key];
}
const users = [{ name: 'John', age: 30 }, { name: 'Mary', age: 25 },];
console.log(getArrayItem(users, 0, 'name'));
//2
//3
