"use strict";
//inheritance
class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `${this.name} will sleep for ${hours}`;
    }
}
class Student extends Person {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const student = new Student("Emma", 25, "USA");
student.makeSleep(5);
class Teacher extends Person {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClass(limitOfClass) {
        return `This ${this.name} will take ${limitOfClass} classes`;
    }
}
const teacher = new Teacher("Brock", 28, "England", "Professor");
teacher.address;
