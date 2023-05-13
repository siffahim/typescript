"use strict";
class Animal {
    // public name: string;
    //public species: string;
    //public sound: string;
    //parameter properties
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }
    // constructor(name: string, species: string, sound: string) {
    //     this.name = name;
    //     this.species = species;
    //     this.sound = sound;
    // }
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
}
const dog = new Animal("Bungee", "Dog", "Gew Gew");
dog.makeSound();
const cat = new Animal("Maxwell", "cat", "Mew Mew");
cat.makeSound();
//create class
class StudentOne {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `${this.name} will sleep for ${hours}`;
    }
}
const student1 = new StudentOne("Harry", 18, "UK");
student1.makeSleep(5);
