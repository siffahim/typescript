
type StudentType = {
    name: string,
    age?: number,
    designation: string,
    address: string
}

const student1: StudentType = {
    name: "Monica",
    age: 22,
    designation: "Programmer",
    address: "Miami"
}

const student2: StudentType = {
    name: "Angel",
    designation: "Designer",
    address: "Berlin"
}

//boolean type
type YoungType = boolean;

const isYoung: YoungType = false;

//string type

type CourseType = string;

let courseName: CourseType = "Next Level WEB DEV"


//function

type OperationType = (x: number, y: number) => number;

// const calculate = (num1: number, num2: number,operation:(x:number,y:number) => number) => {
//     return operation(num1,num2)
// }

const calculate = (num1: number, num2: number, operation: OperationType) => {
    return operation(num1, num2)
}

calculate(10, 20, (x, y) => x + y)