
type DataEntryType = <T>(info: T) => T;

const dataEntry: DataEntryType = (info) => {
    return info;
}

// const dataEntryTwo = <T extends { name: string, age: number }>(info: T) => {
//     return info;
// }
interface MandatoryTypes {
    name: string,
    age: number
}

const dataEntryTwo = <T extends MandatoryTypes>(info: T) => {
    return info;
}

interface IUserData {
    name: string,
    age: number,
    isMarried: boolean;
    gender: null;
}

const userData: IUserData = {
    name: "Jos",
    age: 35,
    isMarried: true,
    gender: null
}

const getUser = dataEntryTwo(userData)