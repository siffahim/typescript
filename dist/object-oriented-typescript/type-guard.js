"use strict";
//keyof guard------>
const addTwoNumber = (paramOne, paramTwo) => {
    if (typeof paramOne === 'number' && typeof paramTwo === 'number') {
        return paramOne + paramTwo;
    }
    else {
        return paramOne.toString() + paramTwo.toString();
    }
};
addTwoNumber('5', '4');
addTwoNumber(8, 6);
function getUser(userType) {
    if ('role' in userType) {
        return `I m ${userType.role}`;
    }
    else {
        return `I m a normal user`;
    }
}
const normalUserOne = { name: "Marsh" };
const adminUserOne = { name: "Harry", role: "Admin" };
console.log(getUser(normalUserOne));
console.log(getUser(adminUserOne));
//instanceof guard
class AnimalClass {
    constructor(name, species) {
        this.name = name;
        this.species = name;
    }
    makeSound() {
        console.log("I m making sound!!!");
    }
}
class Dog extends AnimalClass {
    constructor(name, species) {
        super(name, species);
    }
    makeBark() {
        console.log("I m barking");
    }
}
class Cat extends AnimalClass {
    constructor(name, species) {
        super(name, species);
    }
    makeMew() {
        console.log("I m Mewing");
    }
}
function isDog(animal) {
    return animal instanceof Dog;
}
function isCat(animal) {
    return animal instanceof Cat;
}
function getAnimal(animal) {
    if (isDog(animal)) {
        animal.makeBark();
    }
    else if (isCat(animal)) {
        animal.makeMew();
    }
    else {
        animal.makeSound();
    }
}
// function getAnimal(animal: AnimalClass) {
//     if (animal instanceof Dog) {
//         animal.makeBark()
//     }
//     else if (animal instanceof Cat) {
//         animal.makeMew()
//     }
//     else {
//         animal.makeSound()
//     }
// }
const animalOne = new Dog("Pika", "Dog");
const animalTwo = new Cat("Bungee", "Cat");
getAnimal(animalTwo);
