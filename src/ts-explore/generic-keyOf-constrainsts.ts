interface PersonInterface {
    name: string,
    age: number,
    address: string
}

type newType = "name" | "number" | "address";
type newTypeUsingKeyOf = keyof PersonInterface;

const a: newType = "address"; //manually
const b: newTypeUsingKeyOf = "address"




function constrainProperty<T1, T2 extends keyof T1>(obj: T1, key: T2) {
    obj[key]
}

const property = constrainProperty({ name: "Mr.", age: 25 }, "age")