interface Car { //it's only use for object values
    name: string;
    color: string;
    price: number;
}

interface CarDetails extends Car {
    speed: number;
    isReveal: boolean;
}

//alternative way with type alias:
type Mobile = {
    name: string;
}

type MobileDetails = Mobile & {
    color: string;
    price: number;
}


const cars: CarDetails = {
    name: "Hero",
    color: "Black",
    price: 25555,
    speed: 100,
    isReveal: false
}

const mobile: MobileDetails = {
    name: "Vivo",
    color: "Blue",
    price: 2000,
}

//function

type addTwoNumbersType = (x: number, y: number) => number

interface IAddTwoNumbers {
    (x: number, y: number): number;
}

// const addNumbers = (x: number, y: number): number => {
//     return x + y;
// }

const addTwoNumbers: IAddTwoNumbers = (x, y) => {
    return x + y;
}


//array
type PinsType = number[];

interface IPins {
    [index: number]: string;
}

const pins: IPins = ["1", "2", "3", "4"];