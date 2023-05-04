//mocking
const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = "Data is Fetching...";
        data ? resolve(data) : reject("Failed to fetch data");
    })
}

const getPromiseData = async (): Promise<string> => {
    const data = await makePromise()
    return data;
}
//Boolean
const makePromiseBoolean = (): Promise<Boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = false;
        if (data) {
            resolve(data);
        } else {
            reject("Failed to fetch")
        }
    })
}

const getPromiseBoolean = async (): Promise<Boolean> => {
    const data = await makePromiseBoolean();
    return data;
}
//object

interface IData {
    data: string;
}
const makePromiseObject = (): Promise<IData> => {
    return new Promise<IData>((resolve, reject) => {
        const data: IData = { data: "Data is Fetching" };
        if (data) {
            resolve(data);
        } else {
            reject("Failed to fetch")
        }
    })
}


const getPromiseObject = async (): Promise<IData> => {
    const data = await makePromiseObject()
    return data;
}


//load data from json placeholder;

interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json()
    return data;
}

const getTodoData = async (): Promise<void> => {
    const result = await getTodo();
    console.log(result);
}

getTodoData()