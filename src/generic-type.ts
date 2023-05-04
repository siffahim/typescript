//type GenericType = Array<number>; //it's static value of generic type
type GenericType<T> = Array<T>;


// const studentRolls: Array<number> = [2, 6, 5, 4];
// const studentNames: Array<string> = ["Halsey", "Parker", "Walker", "Alison"];
// const isStudents: Array<boolean> = [false, true, false, false];

const studentRolls: GenericType<number> = [2, 6, 5, 4];
const studentNames: GenericType<string> = ["Halsey", "Parker", "Walker", "Alison"];
const isStudents: GenericType<boolean> = [false, true, false, false];

//object array;

// const studentNamesRolls: Array<{ name: string, roll: number }> = [
//     {
//         name: "Angel",
//         roll: 501
//     },
//     {
//         name: "Ali",
//         roll: 502
//     }
// ]

type NameAndRollType = {
    name: string;
    roll: number;
}
interface INameAndRoll {
    name: string;
    roll: number;
}

const studentNamesRolls: GenericType<NameAndRollType> = [
    {
        name: "Angel",
        roll: 501
    },
    {
        name: "Ali",
        roll: 502
    }
]


//genericType with tuple
type GenericTuple<T1, T2> = [T1, T2];

const relation: GenericTuple<string, string> = ["Kate", "Persian"];

interface IRelationWithSalary {
    name: string,
    salary: number
}

//should not use only object keyword because it's will be any object

const relationWithSalary: GenericTuple<object, string> = [
    {
        name: "Persian",
        salary: 2000
    }
    , "Kate"
]

const relationWithSalaryTwoCase: GenericTuple<IRelationWithSalary, string> = [
    {
        name: "Persian",
        salary: 2000
    },
    "Kate"
]