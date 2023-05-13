//explicit
let course: string = 'Bangladesh';

course = "German";

const age: number = 20;

const isFood: boolean = false;

//string
//number
//boolean
//null
//undefined


//problem One
const logStringProblem = (strValue: string, numValue: number = 3) => {
    for (let i = 0; i < numValue; i++) {
        console.log(strValue)
    }
}

//logStringProblem("Hello", 5)

//problem Two
type AdultType = {
    name: string;
    age: number;
}

const checkAdultPerson = (peoples: AdultType[]): AdultType[] => {
    const result = peoples.filter(people => people.age >= 18);
    return result;
}

const peoplesList: AdultType[] = [
    {
        name: "Alison",
        age: 25
    },
    {
        name: "Berlin",
        age: 15
    },
    {
        name: "Rachel",
        age: 26
    }
]

//console.log(checkAdultPerson(peoplesList))

//problem three

const reversArray = <T>(...arr: T[]): T[] => {
    const reverseElement = arr.reverse()
    return reverseElement;
}

const fruits: Array<string> = ["Avocado", "Banana", "Jackfruit", "Orange"];

//console.log(reversArray<string>(...fruits))


//problem four
class Person {
    //using parameter properties:
    constructor(private name: string, private age: number) { }

    getDetails(): string {
        return `The name of person is ${this.name} and his/her age is ${this.age}`
    }
}

class Student extends Person {
    constructor(name: string, age: number, private grade: string) {
        super(name, age);
    }

    getGrade(): string {
        return `The student got GPA ${this.grade}`
    }
}

const personOne = new Person("Harry", 20);
const studentOne = new Student("Alison", 30, "A+");

// console.log(personOne.getDetails())
// console.log(studentOne.getGrade())

//problem five

const stringChecker = (message: unknown) => {
    if (typeof message === 'string') {
        console.log(message)
    } else {
        throw new Error("There is wrong type")
    }
}

stringChecker("Welcome Alison")

