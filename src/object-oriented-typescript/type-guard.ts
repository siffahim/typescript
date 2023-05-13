type addTwoNumberType = (paramOne: string | number, paramTwo: string | number) => string | number;

interface IAddTwoNumber {
    (paramOne: string | number, paramTwo: string | number): string | number;
}

//keyof guard------>
const addTwoNumber: IAddTwoNumber = (paramOne, paramTwo) => {
    if (typeof paramOne === 'number' && typeof paramTwo === 'number') {
        return paramOne + paramTwo;
    } else {
        return paramOne.toString() + paramTwo.toString();
    }
}

addTwoNumber('5', '4');
addTwoNumber(8, 6);


//in guard
type NormalUserType = {
    name: string;
}

type AdminUserType = {
    name: string;
    role: "Admin"
}

function getUser(userType: NormalUserType | AdminUserType): string {
    if ('role' in userType) {
        return `I m ${userType.role}`
    } else {
        return `I m a normal user`
    }
}

const normalUserOne: NormalUserType = { name: "Marsh" }
const adminUserOne: AdminUserType = { name: "Harry", role: "Admin" }

console.log(getUser(normalUserOne))
console.log(getUser(adminUserOne))


//instanceof guard
class AnimalClass {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = name;
    }

    makeSound() {
        console.log("I m making sound!!!")
    }
}

class Dog extends AnimalClass {
    constructor(name: string, species: string) {
        super(name, species)
    }

    makeBark() {
        console.log("I m barking");
    }
}

class Cat extends AnimalClass {
    constructor(name: string, species: string) {
        super(name, species)
    }

    makeMew() {
        console.log("I m Mewing")
    }
}

function isDog(animal: AnimalClass): animal is Dog {
    return animal instanceof Dog;
}

function isCat(animal: AnimalClass): animal is Cat {
    return animal instanceof Cat;
}

function getAnimal(animal: AnimalClass) {
    if (isDog(animal)) {
        animal.makeBark()
    }
    else if (isCat(animal)) {
        animal.makeMew()
    }
    else {
        animal.makeSound()
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

getAnimal(animalTwo)