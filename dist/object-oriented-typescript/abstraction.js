"use strict";
class Vehicle {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        console.log("I m starting Engine!!!");
    }
    stopEngine() {
        console.log("I m stopping Engine!!");
    }
    moveEngine() {
        console.log("I m moving Engine!");
    }
    test() {
        console.log("it's a testing purpose");
    }
}
const vehicleOne = new Vehicle("Car", "Honda", 2015);
//abstract class
class Leader {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    leaderSleep() {
        console.log("Leader sleeping time at 9am to 4am");
    }
}
class NormalPerson extends Leader {
    leaderQuote() {
        console.log("Welcome to Leader");
    }
    leaderExercise() {
        console.log("Exercise is running");
    }
}
//const leaderOne = new Leader("Rachel", 30, "Professor") //< here is an error you can't not make instance of abstract class you just follow the class;
