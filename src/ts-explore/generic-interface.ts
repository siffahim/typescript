// interface GenericInterface<T>{
//     value: T
// } //Generic interface signature

interface CrushInterface<T1, T2 = null> {
    name: string;
    husband: T1;
    wife?: T2
}

const crushOne: CrushInterface<boolean> = {
    name: "Rose",
    husband: false
}

const crushTwo: CrushInterface<string> = {
    name: "Rose",
    husband: "Berlin"
}

interface ManInterface {
    name: string;
    age: number;
}

const crushThree: CrushInterface<ManInterface, ManInterface> = {
    name: "Rose",
    husband: {
        name: "Berlin",
        age: 25
    },
    wife: {
        name: "Lisa",
        age: 23
    }
}