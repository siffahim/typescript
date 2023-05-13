//inheritance
class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    makeSleep(hours: number): string {
        return `${this.name} will sleep for ${hours}`
    }
}


class Student extends Person {
    constructor(name: string, age: number, address: string) {
        super(name, age, address)
    }
}

const student = new Student("Emma", 25, "USA");
student.makeSleep(5)


class Teacher extends Person {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);
        this.designation = designation;
    }

    takeClass(limitOfClass: number): string {
        return `This ${this.name} will take ${limitOfClass} classes`;
    }
}

const teacher = new Teacher("Brock", 28, "England", "Professor");

teacher.address;