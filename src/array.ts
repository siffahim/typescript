//explicit
const names: string[] = ["Fahim", "Karim", "Rahim"];
const rolls: number[] = [50, 203, 3];

// rolls[5] = "Hi" not possible to assign string value
rolls[5] = 45;

//implicit
const citizens = ["Shawon", 58, true];

//tuples
const user: [string, number] = ["Alison", 101];

//testing purpose
type CompareTwoArrayType = (arrOne: number[], arrTwo: number[]) => number[];
interface ICompareTwoArray {
    (arrOne: number[], arrTwo: number[]): number[];
}

const compareTwoArray: ICompareTwoArray = (arrOne, arrTwo) => {
    const newArr = [];
    for (let x of arrOne) {
        for (let i of arrTwo) {
            if (x === i) {
                newArr.push(x)
            }
        }
    }
    return newArr;
}

const arrOne = [1, 2, 3, 4, 5];
const arrTwo = [2, 4, 6, 8];

console.log(compareTwoArray(arrOne, arrTwo))