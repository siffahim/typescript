//change number to string value with the help of normal system of js
const arrays = [1, 2, 3, 4];
arrays.map(number => console.log(number.toString));


type AreaNumber = {
    height: number;
    width: number;
}

type AreaString = {
    height: string;
    width: string;
}

type AreaReadOnly = {
    readonly height: number;
    readonly width: number;
}

const rectangularArea: AreaReadOnly = {
    height: 10,
    width: 12
}

//rectangularArea.height = 15; //not possible for readonly 

type A = AreaNumber['height'] //look up types
type B = keyof AreaNumber; // 'height' | 'width'


//alternative------------>

type Volume = {
    height: number;
    width: number;
    depth: number;
}

// type Area = {
//     [key in 'height' | 'width']: string
// }

type Area<T> = {
    //[key in keyof Volume]: Volume[key]; // Volume['height']--------> number
    [key in keyof T]: T[key];
}

const areaOne: Area<{ name: string, age: number }> = { name: "Alison", age: 25 }


//for readonly
type AreaReadonly<T> = {
    readonly [key in keyof T]: T[key];
}

const areaReadonly: AreaReadonly<{ name: string, age: number }> = { name: "Alison", age: 25 }


//areaReadonly.age = 20;



//quiz
function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {

    const item = arr[index];

    return item[key];

}



const users = [{ name: 'John', age: 30 }, { name: 'Mary', age: 25 },];

console.log(getArrayItem(users, 0, 'name'))

//2



//3